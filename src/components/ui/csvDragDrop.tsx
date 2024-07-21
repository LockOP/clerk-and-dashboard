// import { useState } from "react";
// import { MdCheckCircle, MdOutlineFileUpload } from "react-icons/md";
// import { IoDocumentTextOutline } from "react-icons/io5";

// export default function CsvDragDrop({
//   allowedFileName,
//   keyMap,
//   allowSortBy,
//   allowSearchBy,
//   columns,
//   csvData,
//   setCsvData,
//   selectedUsers,
//   setSelectedUsers,
// }: {
//   columns: string[];
//   csvData: any[];
//   setCsvData: React.Dispatch<React.SetStateAction<any[]>>;
//   selectedUsers: any[];
//   setSelectedUsers: React.Dispatch<React.SetStateAction<any[]>>;
//   allowedFileName?: string;
//   keyMap?: string;
//   allowSortBy?: string[];
//   allowSearchBy?: string[];
// }) {
//   const [fileName, setFileName] = useState<string>("");
//   const [fileSize, setFileSize] = useState<number>(0);

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     if (event.dataTransfer.files && event.dataTransfer.files[0]) {
//       const file = event.dataTransfer.files[0];
//       if (allowedFileName && file.name !== allowedFileName) {
//         alert(`Please upload a file named ${allowedFileName}.`);
//         return;
//       }
//       if (file.type === "text/csv") {
//         parseCsv(file);
//       } else {
//         alert("Please upload a CSV file.");
//       }
//     }
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       const file = event.target.files[0];
//       if (allowedFileName) {
//         const allowedBaseName = allowedFileName.slice(0, -4); // Remove the '.csv' extension
//         const allowedExtension = allowedFileName.slice(-4); // Get the '.csv' extension

//         if (
//           !file.name.startsWith(allowedBaseName) ||
//           !file.name.endsWith(allowedExtension)
//         ) {
//           alert(`Please upload a file named ${allowedFileName}`);
//           return;
//         }
//       }

//       if (file.type === "text/csv") {
//         parseCsv(file);
//       } else {
//         alert("Please upload a CSV file.");
//       }
//     }
//   };

//   const parseCsv = (file: File) => {
//     Papa.parse(file, {
//       header: true,
//       skipEmptyLines: true,
//       complete: (result) => {
//         setCsvData(result.data);
//         setFileName(file.name);
//         setFileSize(Number((file.size / 1024).toFixed(2)));
//       },
//       error: (error) => {
//         console.error("Error parsing CSV:", error);
//       },
//     });
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   return (
//     <>
//       <div
//         className="w-full h-[206px] shrink-0 border-2 border-dashed rounded border-primary bg-bgSelectedGrey flex flex-col select-none gap-1 justify-center items-center"
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//       >
//         {csvData.length > 0 ? (
//           <>
//             <MdCheckCircle className="text-[40px] text-[#28A745]" />
//             <span className="flex flex-row items-center justify-center gap-1">
//               <IoDocumentTextOutline className="text-[20px] text-textBlack" />
//               <span className="text-[13px] text-black">{fileName}</span>
//               <div className="w-1 h-1 shrink-0 bg-[#E9E8E8] rounded-full"></div>
//               <span className="text-[13px] text-textBlack">
//                 {fileSize}&nbsp;KB
//               </span>
//             </span>
//             <button
//               onClick={() => {
//                 setCsvData([]);
//                 setSelectedUsers([]);
//               }}
//               className="text-primary text-[13px] font-semibold hover:text-hoverPrimary hover:underline cursor-pointer"
//             >
//               Remove
//             </button>
//           </>
//         ) : (
//           <>
//             <MdOutlineFileUpload className="text-[20px] text-textBlack" />
//             <span className="text-[13px] text-textBlack flex flex-row items-center">
//               Drag & Drop or&nbsp;
//               <label className="text-primary font-semibold hover:text-hoverPrimary hover:underline cursor-pointer">
//                 Choose File
//                 <input
//                   type="file"
//                   accept=".csv"
//                   onChange={handleFileChange}
//                   className="hidden"
//                 />
//               </label>
//               &nbsp;to upload
//             </span>
//           </>
//         )}
//       </div>
//       {csvData.length > 0 && (
//         <Table
//           label="Detected Users"
//           inputData={csvData}
//           selectedRows={selectedUsers}
//           setSelectedRows={setSelectedUsers}
//           byDefaultSelectAll={true}
//           keyMap={keyMap}
//           allowSearchBy={allowSearchBy}
//           allowSortBy={allowSortBy}
//           columns={columns}
//         />
//       )}
//     </>
//   );
// }
