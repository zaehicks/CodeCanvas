import { Button } from "flowbite-react"

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Want to enhance your skills in data structures, algorithms, and problem-solving?
        </h2>
        <p className="text-gray-500 my-2">
          Check out NeetCode, a valuable resource for users to develop their knowledge and confidence needed to excel Software Development and Computer Science
        </p>
        <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl rounded-bl-none">
          <a href="https://neetcode.io/" target="_blank" rel="noopener noreferrer">
            NeetCode
            </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://media.licdn.com/dms/image/D5612AQEluDwL9FTPIQ/article-cover_image-shrink_720_1280/0/1700085710142?e=2147483647&v=beta&t=k7bLd5SA_9O2WdB3UbnygxIHOxTTg6T_64ialvez4LY"  />
      </div>
    </div>
  )
}

export default CallToAction