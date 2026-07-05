"use client";

import { useState, useRef } from "react";
import { Upload, File as FileIcon, X, Loader2, CheckCircle } from "lucide-react";
import { submitPresentation } from "@/lib/actions";

export default function UploadForm({ collectionId }: { collectionId: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload");
      return;
    }
    
    setIsLoading(true);
    setError("");
    setSuccess(false);
    
    const formData = new FormData(e.currentTarget);
    formData.append("file", file);
    
    const result = await submitPresentation(collectionId, formData);
    
    setIsLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(true);
      setFile(null);
      (e.target as HTMLFormElement).reset();
      

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}
      
      {success && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <span>Successfully submitted!</span>
        </div>
      )}

      <div>
        <label htmlFor="studentName" className="block text-sm font-medium text-slate-300 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          required
          className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
          placeholder="e.g. John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Presentation File
        </label>
        
        {!file ? (
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
              isDragging ? "border-indigo-500 bg-indigo-500/5" : "border-slate-700 hover:border-slate-500 bg-slate-900/30"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-6 h-6 text-slate-400" />
            </div>
            <p className="text-slate-300 font-medium mb-1">Click to upload or drag and drop</p>
            <p className="text-slate-500 text-xs">PPTX, PDF, or Keynote (Max 10MB)</p>
          </div>
        ) : (
          <div className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0">
                <FileIcon className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="truncate">
                <p className="text-white text-sm font-medium truncate">{file.name}</p>
                <p className="text-slate-500 text-xs">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button 
              type="button" 
              onClick={() => setFile(null)}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
        
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          onChange={handleFileChange}
          accept=".pdf,.pptx,.key"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading || !file}
        className="w-full btn-gradient py-3 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Upload className="w-5 h-5" />
            <span>Submit Presentation</span>
          </>
        )}
      </button>
    </form>
  );
}
