/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { PrimaryButton } from "./Styles";
import { QuestionList } from "./QuestionList";
import { getUnansweredQuestions } from "./QuestionsData";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";
import { useEffect } from "react";

export const HomePage = () => {
	return (
		<Page>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: space-between;
				`}>
				<h2
					css={css`
						font-size: 15px;
						font-weight: bold;
						margin: 10px 0px 5px;
						text-align: center;
						text-transform: uppercase;
					`}>
					<PageTitle>Unanswered Questions</PageTitle>
				</h2>
				<PrimaryButton>Ask a Question</PrimaryButton>
			</div>
			{/*<QuestionList data={getUnansweredQuestions()} />*/}
		</Page>
	);
};
