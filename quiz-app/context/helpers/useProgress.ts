import { useLocalStorage } from "./useLocalStorage";

export function useProgress() {
	return useLocalStorage<TopicProgress[]>("userQuizProgress", [
		{ topicName: "", questionRefs: [], currQuesIndex: 0 },
	]);
}
