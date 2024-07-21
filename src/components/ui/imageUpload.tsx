import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { MdEdit, MdEditSquare, MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineEdit, AiOutlineLoading } from "react-icons/ai";

function ImageUpload({
  onUploadSuccess = () => {},
  id,
}: {
  onUploadSuccess?: (url: string) => void;
  id?: string;
}): React.ReactNode {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<number | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files ? event.dataTransfer.files[0] : null;

    if (file) {
      const validTypes = ["image/png", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        console.error(
          "Invalid file type. Please select a PNG, JPG, or SVG image."
        );
        alert("Invalid file type. Please select a PNG, JPG, or SVG image.");
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImageURL(e.target.result as string);
        setImageName(file.name);
        setImageSize(Number((file.size / (1024 * 1024)).toFixed(2)));
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setImageURL(null);
      setImageName(null);
      setImageSize(null);
    }
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      // Validate file type
      const validTypes = ["image/png", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        console.error("Invalid file type. Please select a PNG, or SVG image.");
        alert("Invalid file type. Please select a PNG, or SVG image.");
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImageURL(e.target.result as string);
        setImageName(file.name);
        setImageSize(Number((file.size / (1024 * 1024)).toFixed(2)));
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setImageURL(null);
      setImageName(null);
      setImageSize(null);
    }
  };

  const onFileUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected for upload.");
      window.alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    // formData.append("rename", imageRename?.trim() + imageExtension?.trim());
    // formData.append("container", container);

    try {
      // const response = await upload_file_api(formData);
      // onUploadSuccess(response);

      setSelectedFile(null);
      setImageURL(null);
      setImageSize(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        // setImageURLEditMode(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div
      className="w-full h-[206px] rounded-md shrink-0 border-2 border-dashed border-input bg-bgSelectedGrey flex flex-col select-none justify-center items-center gap-2"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {imageURL ? ( // Conditionally render the img tag only if imageURL is set
        <img
          className="w-10 h-10 object-contain"
          src={imageURL || "/imageNotFound.png"}
          alt="Uploaded"
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = "/imageNotFound.png";
          }}
        />
      ) : (
        <MdOutlineFileUpload className="text-[40px] text-muted-foreground" />
      )}
      <p className="text-sm text-foreground line-clamp-1">
        {imageName ? imageName : "Choose a file or drag and drop it here"}
      </p>
      <p className="text-xs text-muted-foreground">
        {imageSize
          ? imageSize + " MB"
          : "PNG, SVG formats are supported. Max size: 5MB"}
      </p>
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-row gap-2 items-center"
      >
        <input
          className="hidden"
          type="file"
          accept="image/png, image/svg+xml"
          id="file-upload"
          onChange={onFileChange}
        />
        <span className="whitespace-nowrap text-sm font-medium flex justify-center items-center h-10 rounded-md px-8 border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground w-max text-[13px]">
          Choose File
        </span>
      </label>
    </div>
  );
}

export default ImageUpload;
