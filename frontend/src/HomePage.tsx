/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { PrimaryButton } from "./Styles";
import { QuestionList } from "./QuestionList";
import { getUnansweredQuestions, QuestionData } from "./QuestionsData";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";
import { useEffect, useState } from "react";

export const HomePage = () => {
	const [questions, setQuestions] = useState<QuestionData[] | null>(null);
	const [questionsLoading, setQuestionsLoading] = useState(true);
	useEffect(() => {
		const questions = await getUnansweredQuestions();
	}, []);
	return (
		<Page>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: space-between;
				`}>
				<PageTitle>Unanswered Questions</PageTitle>

				<PrimaryButton>Ask a Question</PrimaryButton>
			</div>
			{/*<QuestionList data={getUnansweredQuestions()} />*/}
		</Page>
	);
};
