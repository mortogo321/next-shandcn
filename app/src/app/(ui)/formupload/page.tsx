"use client";

import { IconFile, IconPower, IconSearch, IconUpload } from "@tabler/icons-react";
import React, { useRef, useState } from "react";

type FileItem = {
  name: string;
  size: number;
  lastModified: number;
  status: "uploading" | "done";
};

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export default function FormUploadPage() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [search, setSearch] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const newFiles: FileItem[] = [];
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        newFiles.push({
          name: file.name,
          size: file.size,
          lastModified: file.lastModified,
          status: "uploading",
        });
      }
      setUploading(true);
      setFiles((prev) => [...prev, ...newFiles]);
      // Simulate upload for all files
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setFiles((prev) => prev.map((f) => (newFiles.some((nf) => nf.name === f.name) ? { ...f, status: "done" } : f)));
          setUploading(false);
          setUploadProgress(0);
        }
      }, 150);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0] && fileInputRef.current) {
      fileInputRef.current.files = e.dataTransfer.files;
      handleFileChange({ target: { files: e.dataTransfer.files } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const filteredFiles = files.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex justify-between items-center gap-3 mb-6">
        <div>
          <span className="text-2xl font-semibold">Files and assets</span>
          <p className="text-gray-400 text-sm mt-1">Documents ans attachments that have been uploaded as part of this Lokblok</p>
        </div>
        <button className="bg-gradient-to-r from-[#009FFF] to-[#006EFF] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow hover:from-[#38bdf8] hover:to-[#1e90ff]">
          <IconPower size={28} /> Activate Now
        </button>
      </div>

      {/* Upload Area */}
      <div className="border border-dashed border-gray-500 rounded-xl p-8 flex flex-col items-center justify-center mb-8 bg-[#18191b] relative" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        <IconUpload size={40} className="text-[#38bdf8] mb-2" />
        <label htmlFor="file-upload" className="text-[#38bdf8] cursor-pointer underline">
          Link <span className="text-gray-300"> or drag and drop</span>
        </label>
        <span className="text-gray-500 text-xs mt-2">SVG, PNG, JPG or GIF (max. 3MB)</span>
        <input id="file-upload" type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} accept=".svg,.png,.jpg,.jpeg,.gif,.pdf,.txt,.xlsx,.pptx" multiple />
        {uploading && files.length > 0 && (
          <div className="w-full mt-6">
            <div className="flex items-center gap-2 mb-1">
              <IconFile size={20} className="text-[#38bdf8]" />
              <span className="text-sm">{files[files.length - 1].name}</span>
              <span className="text-xs text-gray-400">{formatBytes(files[files.length - 1].size)}</span>
              <span className="text-xs text-gray-400">Loading</span>
            </div>
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-1 bg-[#38bdf8] transition-all" style={{ width: `${uploadProgress}%` }} />
            </div>
          </div>
        )}
      </div>
      {/* File Table */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">All Files</h2>
        <div className="relative">
          <input type="text" placeholder="Search" className="bg-[#23262F] text-white rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] w-64" value={search} onChange={(e) => setSearch(e.target.value)} />
          <IconSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="bg-[#23262F] rounded-xl overflow-hidden">
        {filteredFiles.length > 0 && (
          <div className="grid grid-cols-3 p-6 text-gray-400 text-sm border-b border-[#23262F]">
            <span className="text-left">Name</span>
            <span className="w-24 text-left">Size</span>
            <span className="w-40 text-left">Last Modified</span>
          </div>
        )}
        <div className="min-h-[180px] flex flex-col px-6 py-2">
          {filteredFiles.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full pt-6">
              <span className="text-lg font-semibold mb-2">No Document Uploaded</span>
              <span className="text-gray-400 text-sm mb-4">You haven&apos;t uploaded any files yet. To get started:</span>
              <button
                className="bg-gradient-to-r from-[#009FFF] to-[#006EFF] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow hover:from-[#38bdf8] hover:to-[#1e90ff]"
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                + Add File
              </button>
            </div>
          ) : (
            filteredFiles.map((file, idx) => (
              <div key={file.name + idx} className="grid grid-cols-3 w-full py-2 border-b border-[#23262F] last:border-b-0 items-center text-white text-sm">
                <span className="text-left flex items-center gap-2">
                  <IconFile size={18} className="text-[#38bdf8]" />
                  {file.name}
                </span>
                <span className="w-24 text-left">{formatBytes(file.size)}</span>
                <span className="w-40 text-left">{file.lastModified ? new Date(file.lastModified).toLocaleString() : "-"}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
