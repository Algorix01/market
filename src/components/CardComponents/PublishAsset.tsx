const PublishAsset = ({ onPublish }: { onPublish: () => void }) => {
    return (
      <>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onPublish}>PublishAI</button>    
      </>
    )
}

export default PublishAsset