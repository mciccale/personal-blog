export default function PostPreviewSkeleton() {
  return (
    <div className="mx-auto flex max-h-80 max-w-2xl overflow-x-auto rounded-lg border-2 border-solid border-blue-200">
      <div
        className="hidden rounded-l-md bg-gray-200 sm:block"
        style={{ width: '200px', height: '125px' }}
      ></div>
      <div className="flex-grow px-3 pb-3 pt-2">
        <div className="h-6 w-3/4 rounded pr-40 text-2xl font-bold text-gray-400">
          Loading
        </div>
      </div>
    </div>
  );
}
