export const css = `
<style>
@import url(fontawesome-all.min.css);

/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

html, body, div, span, applet, object,
iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
pre, a, abbr, acronym, address, big, cite,
code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b,
u, i, center, dl, dt, dd, ol, ul, li, fieldset,
form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside,
canvas, details, embed, figure, figcaption,
footer, header, hgroup, menu, nav, output, ruby,
section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	-webkit-text-size-adjust: none;
}

mark {
	background-color: transparent;
	color: inherit;
}

input::-moz-focus-inner {
	border: 0;
	padding: 0;
}

input, select, textarea {
	-moz-appearance: none;
	-webkit-appearance: none;
	-ms-appearance: none;
	appearance: none;
}

/* Basic */

	@-ms-viewport {
		width: device-width;
	}

	body {
		-ms-overflow-style: scrollbar;
	}

	@media screen and (max-width: 480px) {

		html, body {
			min-width: 320px;
		}

	}

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		background: #312450;
	}

		body.is-preload *, body.is-preload *:before, body.is-preload *:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
		}

/* Type */

	body, input, select, textarea {
		color: rgba(255, 255, 255, 0.55);
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16.5pt;
		font-weight: normal;
		line-height: 1.75;
	}

		@media screen and (max-width: 1680px) {

			body, input, select, textarea {
				font-size: 13pt;
			}

		}

		@media screen and (max-width: 1280px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 360px) {

			body, input, select, textarea {
				font-size: 11pt;
			}

		}

	a {
		-moz-transition: color 0.2s ease, border-bottom-color 0.2s ease;
		-webkit-transition: color 0.2s ease, border-bottom-color 0.2s ease;
		-ms-transition: color 0.2s ease, border-bottom-color 0.2s ease;
		transition: color 0.2s ease, border-bottom-color 0.2s ease;
		border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
		color: inherit;
		text-decoration: none;
	}

		a:hover {
			border-bottom-color: transparent;
			color: #ffffff;
		}

	strong, b {
		color: #ffffff;
		font-weight: bold;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #ffffff;
		font-weight: bold;
		line-height: 1.5;
		margin: 0 0 0.5em 0;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
		}

	h1 {
		font-size: 2.75em;
	}

		h1.major {
			margin: 0 0 1.3em 0;
			position: relative;
			padding-bottom: 0.35em;
		}

			h1.major:after {
				background-image: -moz-linear-gradient(to right, #5e42a6, #b74e91);
				background-image: -webkit-linear-gradient(to right, #5e42a6, #b74e91);
				background-image: -ms-linear-gradient(to right, #5e42a6, #b74e91);
				background-image: linear-gradient(to right, #5e42a6, #b74e91);
				-moz-transition: max-width 0.2s ease;
				-webkit-transition: max-width 0.2s ease;
				-ms-transition: max-width 0.2s ease;
				transition: max-width 0.2s ease;
				border-radius: 0.2em;
				bottom: 0;
				content: '';
				height: 0.05em;
				position: absolute;
				right: 0;
				width: 100%;
			}

	h2 {
		font-size: 1.75em;
	}

	h3 {
		font-size: 1.1em;
	}

	h4 {
		font-size: 1em;
	}

	h5 {
		font-size: 0.8em;
	}

	h6 {
		font-size: 0.6em;
	}

	@media screen and (max-width: 736px) {

		h1 {
			font-size: 2em;
		}

		h2 {
			font-size: 1.25em;
		}

		h3 {
			font-size: 1em;
		}

		h4 {
			font-size: 0.8em;
		}

		h5 {
			font-size: 0.6em;
		}

		h6 {
			font-size: 0.6em;
		}

	}

	sub {
		font-size: 0.8em;
		position: relative;
		top: 0.5em;
	}

	sup {
		font-size: 0.8em;
		position: relative;
		top: -0.5em;
	}

	blockquote {
		border-left: solid 4px rgba(255, 255, 255, 0.15);
		font-style: italic;
		margin: 0 0 2em 0;
		padding: 0.5em 0 0.5em 2em;
	}

	code {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 0.25em;
		border: solid 1px rgba(255, 255, 255, 0.15);
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0.25em;
		padding: 0.25em 0.65em;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0 2em 0;
	}

		pre code {
			display: block;
			line-height: 1.75em;
			padding: 1em 1.5em;
			overflow-x: auto;
		}

	hr {
		border: 0;
		border-bottom: solid 1px rgba(255, 255, 255, 0.15);
		margin: 2em 0;
	}

		hr.major {
			margin: 3em 0;
		}

	.align-left {
		text-align: left;
	}

	.align-center {
		text-align: center;
	}

	.align-right {
		text-align: right;
	}

/* Row */

	.row {
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		align-items: stretch;
	}

		.row > * {
			box-sizing: border-box;
		}

		.row.gtr-uniform > * > :last-child {
			margin-bottom: 0;
		}

		.row.aln-left {
			justify-content: flex-start;
		}

		.row.aln-center {
			justify-content: center;
		}

		.row.aln-right {
			justify-content: flex-end;
		}

		.row.aln-top {
			align-items: flex-start;
		}

		.row.aln-middle {
			align-items: center;
		}

		.row.aln-bottom {
			align-items: flex-end;
		}

		.row > .imp {
			order: -1;
		}

		.row > .col-1 {
			width: 8.33333%;
		}

		.row > .off-1 {
			margin-left: 8.33333%;
		}

		.row > .col-2 {
			width: 16.66667%;
		}

		.row > .off-2 {
			margin-left: 16.66667%;
		}

		.row > .col-3 {
			width: 25%;
		}

		.row > .off-3 {
			margin-left: 25%;
		}

		.row > .col-4 {
			width: 33.33333%;
		}

		.row > .off-4 {
			margin-left: 33.33333%;
		}

		.row > .col-5 {
			width: 41.66667%;
		}

		.row > .off-5 {
			margin-left: 41.66667%;
		}

		.row > .col-6 {
			width: 50%;
		}

		.row > .off-6 {
			margin-left: 50%;
		}

		.row > .col-7 {
			width: 58.33333%;
		}

		.row > .off-7 {
			margin-left: 58.33333%;
		}

		.row > .col-8 {
			width: 66.66667%;
		}

		.row > .off-8 {
			margin-left: 66.66667%;
		}

		.row > .col-9 {
			width: 75%;
		}

		.row > .off-9 {
			margin-left: 75%;
		}

		.row > .col-10 {
			width: 83.33333%;
		}

		.row > .off-10 {
			margin-left: 83.33333%;
		}

		.row > .col-11 {
			width: 91.66667%;
		}

		.row > .off-11 {
			margin-left: 91.66667%;
		}

		.row > .col-12 {
			width: 100%;
		}

		.row > .off-12 {
			margin-left: 100%;
		}

		.row.gtr-0 {
			margin-top: 0;
			margin-left: 0em;
		}

			.row.gtr-0 > * {
				padding: 0 0 0 0em;
			}

			.row.gtr-0.gtr-uniform {
				margin-top: 0em;
			}

				.row.gtr-0.gtr-uniform > * {
					padding-top: 0em;
				}

		.row.gtr-25 {
			margin-top: 0;
			margin-left: -0.375em;
		}

			.row.gtr-25 > * {
				padding: 0 0 0 0.375em;
			}

			.row.gtr-25.gtr-uniform {
				margin-top: -0.375em;
			}

				.row.gtr-25.gtr-uniform > * {
					padding-top: 0.375em;
				}

		.row.gtr-50 {
			margin-top: 0;
			margin-left: -0.75em;
		}

			.row.gtr-50 > * {
				padding: 0 0 0 0.75em;
			}

			.row.gtr-50.gtr-uniform {
				margin-top: -0.75em;
			}

				.row.gtr-50.gtr-uniform > * {
					padding-top: 0.75em;
				}

		.row {
			margin-top: 0;
			margin-left: -1.5em;
		}

			.row > * {
				padding: 0 0 0 1.5em;
			}

			.row.gtr-uniform {
				margin-top: -1.5em;
			}

				.row.gtr-uniform > * {
					padding-top: 1.5em;
				}

		.row.gtr-150 {
			margin-top: 0;
			margin-left: -2.25em;
		}

			.row.gtr-150 > * {
				padding: 0 0 0 2.25em;
			}

			.row.gtr-150.gtr-uniform {
				margin-top: -2.25em;
			}

				.row.gtr-150.gtr-uniform > * {
					padding-top: 2.25em;
				}

		.row.gtr-200 {
			margin-top: 0;
			margin-left: -3em;
		}

			.row.gtr-200 > * {
				padding: 0 0 0 3em;
			}

			.row.gtr-200.gtr-uniform {
				margin-top: -3em;
			}

				.row.gtr-200.gtr-uniform > * {
					padding-top: 3em;
				}

		@media screen and (max-width: 1680px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-xlarge {
					order: -1;
				}

				.row > .col-1-xlarge {
					width: 8.33333%;
				}

				.row > .off-1-xlarge {
					margin-left: 8.33333%;
				}

				.row > .col-2-xlarge {
					width: 16.66667%;
				}

				.row > .off-2-xlarge {
					margin-left: 16.66667%;
				}

				.row > .col-3-xlarge {
					width: 25%;
				}

				.row > .off-3-xlarge {
					margin-left: 25%;
				}

				.row > .col-4-xlarge {
					width: 33.33333%;
				}

				.row > .off-4-xlarge {
					margin-left: 33.33333%;
				}

				.row > .col-5-xlarge {
					width: 41.66667%;
				}

				.row > .off-5-xlarge {
					margin-left: 41.66667%;
				}

				.row > .col-6-xlarge {
					width: 50%;
				}

				.row > .off-6-xlarge {
					margin-left: 50%;
				}

				.row > .col-7-xlarge {
					width: 58.33333%;
				}

				.row > .off-7-xlarge {
					margin-left: 58.33333%;
				}

				.row > .col-8-xlarge {
					width: 66.66667%;
				}

				.row > .off-8-xlarge {
					margin-left: 66.66667%;
				}

				.row > .col-9-xlarge {
					width: 75%;
				}

				.row > .off-9-xlarge {
					margin-left: 75%;
				}

				.row > .col-10-xlarge {
					width: 83.33333%;
				}

				.row > .off-10-xlarge {
					margin-left: 83.33333%;
				}

				.row > .col-11-xlarge {
					width: 91.66667%;
				}

				.row > .off-11-xlarge {
					margin-left: 91.66667%;
				}

				.row > .col-12-xlarge {
					width: 100%;
				}

				.row > .off-12-xlarge {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0;
					margin-left: 0em;
				}

					.row.gtr-0 > * {
						padding: 0 0 0 0em;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0em;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0em;
						}

				.row.gtr-25 {
					margin-top: 0;
					margin-left: -0.375em;
				}

					.row.gtr-25 > * {
						padding: 0 0 0 0.375em;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -0.375em;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 0.375em;
						}

				.row.gtr-50 {
					margin-top: 0;
					margin-left: -0.75em;
				}

					.row.gtr-50 > * {
						padding: 0 0 0 0.75em;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -0.75em;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 0.75em;
						}

				.row {
					margin-top: 0;
					margin-left: -1.5em;
				}

					.row > * {
						padding: 0 0 0 1.5em;
					}

					.row.gtr-uniform {
						margin-top: -1.5em;
					}

						.row.gtr-uniform > * {
							padding-top: 1.5em;
						}

				.row.gtr-150 {
					margin-top: 0;
					margin-left: -2.25em;
				}

					.row.gtr-150 > * {
						padding: 0 0 0 2.25em;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -2.25em;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 2.25em;
						}

				.row.gtr-200 {
					margin-top: 0;
					margin-left: -3em;
				}

					.row.gtr-200 > * {
						padding: 0 0 0 3em;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -3em;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 3em;
						}

		}

		@media screen and (max-width: 1280px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-large {
					order: -1;
				}

				.row > .col-1-large {
					width: 8.33333%;
				}

				.row > .off-1-large {
					margin-left: 8.33333%;
				}

				.row > .col-2-large {
					width: 16.66667%;
				}

				.row > .off-2-large {
					margin-left: 16.66667%;
				}

				.row > .col-3-large {
					width: 25%;
				}

				.row > .off-3-large {
					margin-left: 25%;
				}

				.row > .col-4-large {
					width: 33.33333%;
				}

				.row > .off-4-large {
					margin-left: 33.33333%;
				}

				.row > .col-5-large {
					width: 41.66667%;
				}

				.row > .off-5-large {
					margin-left: 41.66667%;
				}

				.row > .col-6-large {
					width: 50%;
				}

				.row > .off-6-large {
					margin-left: 50%;
				}

				.row > .col-7-large {
					width: 58.33333%;
				}

				.row > .off-7-large {
					margin-left: 58.33333%;
				}

				.row > .col-8-large {
					width: 66.66667%;
				}

				.row > .off-8-large {
					margin-left: 66.66667%;
				}

				.row > .col-9-large {
					width: 75%;
				}

				.row > .off-9-large {
					margin-left: 75%;
				}

				.row > .col-10-large {
					width: 83.33333%;
				}

				.row > .off-10-large {
					margin-left: 83.33333%;
				}

				.row > .col-11-large {
					width: 91.66667%;
				}

				.row > .off-11-large {
					margin-left: 91.66667%;
				}

				.row > .col-12-large {
					width: 100%;
				}

				.row > .off-12-large {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0;
					margin-left: 0em;
				}

					.row.gtr-0 > * {
						padding: 0 0 0 0em;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0em;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0em;
						}

				.row.gtr-25 {
					margin-top: 0;
					margin-left: -0.375em;
				}

					.row.gtr-25 > * {
						padding: 0 0 0 0.375em;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -0.375em;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 0.375em;
						}

				.row.gtr-50 {
					margin-top: 0;
					margin-left: -0.75em;
				}

					.row.gtr-50 > * {
						padding: 0 0 0 0.75em;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -0.75em;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 0.75em;
						}

				.row {
					margin-top: 0;
					margin-left: -1.5em;
				}

					.row > * {
						padding: 0 0 0 1.5em;
					}

					.row.gtr-uniform {
						margin-top: -1.5em;
					}

						.row.gtr-uniform > * {
							padding-top: 1.5em;
						}

				.row.gtr-150 {
					margin-top: 0;
					margin-left: -2.25em;
				}

					.row.gtr-150 > * {
						padding: 0 0 0 2.25em;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -2.25em;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 2.25em;
						}

				.row.gtr-200 {
					margin-top: 0;
					margin-left: -3em;
				}

					.row.gtr-200 > * {
						padding: 0 0 0 3em;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -3em;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 3em;
						}

		}

		@media screen and (max-width: 980px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-medium {
					order: -1;
				}

				.row > .col-1-medium {
					width: 8.33333%;
				}

				.row > .off-1-medium {
					margin-left: 8.33333%;
				}

				.row > .col-2-medium {
					width: 16.66667%;
				}

				.row > .off-2-medium {
					margin-left: 16.66667%;
				}

				.row > .col-3-medium {
					width: 25%;
				}

				.row > .off-3-medium {
					margin-left: 25%;
				}

				.row > .col-4-medium {
					width: 33.33333%;
				}

				.row > .off-4-medium {
					margin-left: 33.33333%;
				}

				.row > .col-5-medium {
					width: 41.66667%;
				}

				.row > .off-5-medium {
					margin-left: 41.66667%;
				}

				.row > .col-6-medium {
					width: 50%;
				}

				.row > .off-6-medium {
					margin-left: 50%;
				}

				.row > .col-7-medium {
					width: 58.33333%;
				}

				.row > .off-7-medium {
					margin-left: 58.33333%;
				}

				.row > .col-8-medium {
					width: 66.66667%;
				}

				.row > .off-8-medium {
					margin-left: 66.66667%;
				}

				.row > .col-9-medium {
					width: 75%;
				}

				.row > .off-9-medium {
					margin-left: 75%;
				}

				.row > .col-10-medium {
					width: 83.33333%;
				}

				.row > .off-10-medium {
					margin-left: 83.33333%;
				}

				.row > .col-11-medium {
					width: 91.66667%;
				}

				.row > .off-11-medium {
					margin-left: 91.66667%;
				}

				.row > .col-12-medium {
					width: 100%;
				}

				.row > .off-12-medium {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0;
					margin-left: 0em;
				}

					.row.gtr-0 > * {
						padding: 0 0 0 0em;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0em;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0em;
						}

				.row.gtr-25 {
					margin-top: 0;
					margin-left: -0.375em;
				}

					.row.gtr-25 > * {
						padding: 0 0 0 0.375em;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -0.375em;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 0.375em;
						}

				.row.gtr-50 {
					margin-top: 0;
					margin-left: -0.75em;
				}

					.row.gtr-50 > * {
						padding: 0 0 0 0.75em;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -0.75em;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 0.75em;
						}

				.row {
					margin-top: 0;
					margin-left: -1.5em;
				}

					.row > * {
						padding: 0 0 0 1.5em;
					}

					.row.gtr-uniform {
						margin-top: -1.5em;
					}

						.row.gtr-uniform > * {
							padding-top: 1.5em;
						}

				.row.gtr-150 {
					margin-top: 0;
					margin-left: -2.25em;
				}

					.row.gtr-150 > * {
						padding: 0 0 0 2.25em;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -2.25em;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 2.25em;
						}

				.row.gtr-200 {
					margin-top: 0;
					margin-left: -3em;
				}

					.row.gtr-200 > * {
						padding: 0 0 0 3em;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -3em;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 3em;
						}

		}

		@media screen and (max-width: 736px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-small {
					order: -1;
				}

				.row > .col-1-small {
					width: 8.33333%;
				}

				.row > .off-1-small {
					margin-left: 8.33333%;
				}

				.row > .col-2-small {
					width: 16.66667%;
				}

				.row > .off-2-small {
					margin-left: 16.66667%;
				}

				.row > .col-3-small {
					width: 25%;
				}

				.row > .off-3-small {
					margin-left: 25%;
				}

				.row > .col-4-small {
					width: 33.33333%;
				}

				.row > .off-4-small {
					margin-left: 33.33333%;
				}

				.row > .col-5-small {
					width: 41.66667%;
				}

				.row > .off-5-small {
					margin-left: 41.66667%;
				}

				.row > .col-6-small {
					width: 50%;
				}

				.row > .off-6-small {
					margin-left: 50%;
				}

				.row > .col-7-small {
					width: 58.33333%;
				}

				.row > .off-7-small {
					margin-left: 58.33333%;
				}

				.row > .col-8-small {
					width: 66.66667%;
				}

				.row > .off-8-small {
					margin-left: 66.66667%;
				}

				.row > .col-9-small {
					width: 75%;
				}

				.row > .off-9-small {
					margin-left: 75%;
				}

				.row > .col-10-small {
					width: 83.33333%;
				}

				.row > .off-10-small {
					margin-left: 83.33333%;
				}

				.row > .col-11-small {
					width: 91.66667%;
				}

				.row > .off-11-small {
					margin-left: 91.66667%;
				}

				.row > .col-12-small {
					width: 100%;
				}

				.row > .off-12-small {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0;
					margin-left: 0em;
				}

					.row.gtr-0 > * {
						padding: 0 0 0 0em;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0em;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0em;
						}

				.row.gtr-25 {
					margin-top: 0;
					margin-left: -0.375em;
				}

					.row.gtr-25 > * {
						padding: 0 0 0 0.375em;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -0.375em;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 0.375em;
						}

				.row.gtr-50 {
					margin-top: 0;
					margin-left: -0.75em;
				}

					.row.gtr-50 > * {
						padding: 0 0 0 0.75em;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -0.75em;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 0.75em;
						}

				.row {
					margin-top: 0;
					margin-left: -1.5em;
				}

					.row > * {
						padding: 0 0 0 1.5em;
					}

					.row.gtr-uniform {
						margin-top: -1.5em;
					}

						.row.gtr-uniform > * {
							padding-top: 1.5em;
						}

				.row.gtr-150 {
					margin-top: 0;
					margin-left: -2.25em;
				}

					.row.gtr-150 > * {
						padding: 0 0 0 2.25em;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -2.25em;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 2.25em;
						}

				.row.gtr-200 {
					margin-top: 0;
					margin-left: -3em;
				}

					.row.gtr-200 > * {
						padding: 0 0 0 3em;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -3em;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 3em;
						}

		}

		@media screen and (max-width: 480px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-xsmall {
					order: -1;
				}

				.row > .col-1-xsmall {
					width: 8.33333%;
				}

				.row > .off-1-xsmall {
					margin-left: 8.33333%;
				}

				.row > .col-2-xsmall {
					width: 16.66667%;
				}

				.row > .off-2-xsmall {
					margin-left: 16.66667%;
				}

				.row > .col-3-xsmall {
					width: 25%;
				}

				.row > .off-3-xsmall {
					margin-left: 25%;
				}

				.row > .col-4-xsmall {
					width: 33.33333%;
				}

				.row > .off-4-xsmall {
					margin-left: 33.33333%;
				}

				.row > .col-5-xsmall {
					width: 41.66667%;
				}

				.row > .off-5-xsmall {
					margin-left: 41.66667%;
				}

				.row > .col-6-xsmall {
					width: 50%;
				}

				.row > .off-6-xsmall {
					margin-left: 50%;
				}

				.row > .col-7-xsmall {
					width: 58.33333%;
				}

				.row > .off-7-xsmall {
					margin-left: 58.33333%;
				}

				.row > .col-8-xsmall {
					width: 66.66667%;
				}

				.row > .off-8-xsmall {
					margin-left: 66.66667%;
				}

				.row > .col-9-xsmall {
					width: 75%;
				}

				.row > .off-9-xsmall {
					margin-left: 75%;
				}

				.row > .col-10-xsmall {
					width: 83.33333%;
				}

				.row > .off-10-xsmall {
					margin-left: 83.33333%;
				}

				.row > .col-11-xsmall {
					width: 91.66667%;
				}

				.row > .off-11-xsmall {
					margin-left: 91.66667%;
				}

				.row > .col-12-xsmall {
					width: 100%;
				}

				.row > .off-12-xsmall {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0;
					margin-left: 0em;
				}

					.row.gtr-0 > * {
						padding: 0 0 0 0em;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0em;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0em;
						}

				.row.gtr-25 {
					margin-top: 0;
					margin-left: -0.375em;
				}

					.row.gtr-25 > * {
						padding: 0 0 0 0.375em;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -0.375em;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 0.375em;
						}

				.row.gtr-50 {
					margin-top: 0;
					margin-left: -0.75em;
				}

					.row.gtr-50 > * {
						padding: 0 0 0 0.75em;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -0.75em;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 0.75em;
						}

				.row {
					margin-top: 0;
					margin-left: -1.5em;
				}

					.row > * {
						padding: 0 0 0 1.5em;
					}

					.row.gtr-uniform {
						margin-top: -1.5em;
					}

						.row.gtr-uniform > * {
							padding-top: 1.5em;
						}

				.row.gtr-150 {
					margin-top: 0;
					margin-left: -2.25em;
				}

					.row.gtr-150 > * {
						padding: 0 0 0 2.25em;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -2.25em;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 2.25em;
						}

				.row.gtr-200 {
					margin-top: 0;
					margin-left: -3em;
				}

					.row.gtr-200 > * {
						padding: 0 0 0 3em;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -3em;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 3em;
						}

		}

/* Box */

	.box {
		border-radius: 0.25em;
		border: solid 1px rgba(255, 255, 255, 0.15);
		margin-bottom: 2em;
		padding: 1.5em;
	}

		.box > :last-child,
		.box > :last-child > :last-child,
		.box > :last-child > :last-child > :last-child {
			margin-bottom: 0;
		}

		.box.alt {
			border: 0;
			border-radius: 0;
			padding: 0;
		}

/* Button */

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: border-color 0.2s ease;
		-webkit-transition: border-color 0.2s ease;
		-ms-transition: border-color 0.2s ease;
		transition: border-color 0.2s ease;
		background-color: transparent;
		border: solid 1px !important;
		border-color: rgba(255, 255, 255, 0.15) !important;
		border-radius: 3em;
		color: #ffffff !important;
		cursor: pointer;
		display: inline-block;
		font-size: 0.6em;
		font-weight: bold;
		height: calc(4.75em + 2px);
		letter-spacing: 0.25em;
		line-height: 4.75em;
		outline: 0;
		padding: 0 3.75em;
		position: relative;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		white-space: nowrap;
	}

		input[type="submit"]:after,
		input[type="reset"]:after,
		input[type="button"]:after,
		button:after,
		.button:after {
			-moz-transform: scale(0.25);
			-webkit-transform: scale(0.25);
			-ms-transform: scale(0.25);
			transform: scale(0.25);
			pointer-events: none;
			-moz-transition: opacity 0.2s ease, -moz-transform 0.2s ease;
			-webkit-transition: opacity 0.2s ease, -webkit-transform 0.2s ease;
			-ms-transition: opacity 0.2s ease, -ms-transform 0.2s ease;
			transition: opacity 0.2s ease, transform 0.2s ease;
			background: #ffffff;
			border-radius: 3em;
			content: '';
			height: 100%;
			left: 0;
			opacity: 0;
			position: absolute;
			top: 0;
			width: 100%;
		}

		input[type="submit"].icon:before,
		input[type="reset"].icon:before,
		input[type="button"].icon:before,
		button.icon:before,
		.button.icon:before {
			margin-right: 0.75em;
		}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		button.fit,
		.button.fit {
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		button.small,
		.button.small {
			font-size: 0.4em;
		}

		input[type="submit"].large,
		input[type="reset"].large,
		input[type="button"].large,
		button.large,
		.button.large {
			font-size: 0.8em;
		}

		input[type="submit"].primary,
		input[type="reset"].primary,
		input[type="button"].primary,
		button.primary,
		.button.primary {
			background-color: #ffffff;
			color: #312450 !important;
		}

			input[type="submit"].primary:after,
			input[type="reset"].primary:after,
			input[type="button"].primary:after,
			button.primary:after,
			.button.primary:after {
				display: none;
			}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		button.disabled,
		button:disabled,
		.button.disabled,
		.button:disabled {
			cursor: default;
			opacity: 0.5;
			pointer-events: none;
		}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
			border-color: rgba(255, 255, 255, 0.55) !important;
		}

			input[type="submit"]:hover:after,
			input[type="reset"]:hover:after,
			input[type="button"]:hover:after,
			button:hover:after,
			.button:hover:after {
				opacity: 0.05;
				-moz-transform: scale(1);
				-webkit-transform: scale(1);
				-ms-transform: scale(1);
				transform: scale(1);
			}

			input[type="submit"]:hover:active,
			input[type="reset"]:hover:active,
			input[type="button"]:hover:active,
			button:hover:active,
			.button:hover:active {
				border-color: #ffffff !important;
			}

				input[type="submit"]:hover:active:after,
				input[type="reset"]:hover:active:after,
				input[type="button"]:hover:active:after,
				button:hover:active:after,
				.button:hover:active:after {
					opacity: 0.1;
				}

/* Features */

	.features {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		border-radius: 0.25em;
		border: solid 1px rgba(255, 255, 255, 0.15);
		background: rgba(255, 255, 255, 0.05);
		margin: 0 0 2em 0;
	}

		.features section {
			padding: 3.5em 3em 1em 7em ;
			width: 50%;
			border-top: solid 1px rgba(255, 255, 255, 0.15);
			position: relative;
		}

			.features section:nth-child(-n + 2) {
				border-top-width: 0;
			}

			.features section:nth-child(2n) {
				border-left: solid 1px rgba(255, 255, 255, 0.15);
			}

			.features section .icon {
				-moz-transition: opacity 0.5s ease, -moz-transform 0.5s ease;
				-webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease;
				-ms-transition: opacity 0.5s ease, -ms-transform 0.5s ease;
				transition: opacity 0.5s ease, transform 0.5s ease;
				-moz-transition-delay: 1s;
				-webkit-transition-delay: 1s;
				-ms-transition-delay: 1s;
				transition-delay: 1s;
				-moz-transform: scale(1);
				-webkit-transform: scale(1);
				-ms-transform: scale(1);
				transform: scale(1);
				position: absolute;
				left: 3em;
				top: 3em;
				opacity: 1;
			}

			.features section:nth-child(1) .icon {
				-moz-transition-delay: 0.15s;
				-webkit-transition-delay: 0.15s;
				-ms-transition-delay: 0.15s;
				transition-delay: 0.15s;
			}

			.features section:nth-child(2) .icon {
				-moz-transition-delay: 0.3s;
				-webkit-transition-delay: 0.3s;
				-ms-transition-delay: 0.3s;
				transition-delay: 0.3s;
			}

			.features section:nth-child(3) .icon {
				-moz-transition-delay: 0.45s;
				-webkit-transition-delay: 0.45s;
				-ms-transition-delay: 0.45s;
				transition-delay: 0.45s;
			}

			.features section:nth-child(4) .icon {
				-moz-transition-delay: 0.6s;
				-webkit-transition-delay: 0.6s;
				-ms-transition-delay: 0.6s;
				transition-delay: 0.6s;
			}

			.features section:nth-child(5) .icon {
				-moz-transition-delay: 0.75s;
				-webkit-transition-delay: 0.75s;
				-ms-transition-delay: 0.75s;
				transition-delay: 0.75s;
			}

			.features section:nth-child(6) .icon {
				-moz-transition-delay: 0.9s;
				-webkit-transition-delay: 0.9s;
				-ms-transition-delay: 0.9s;
				transition-delay: 0.9s;
			}

			.features section:nth-child(7) .icon {
				-moz-transition-delay: 1.05s;
				-webkit-transition-delay: 1.05s;
				-ms-transition-delay: 1.05s;
				transition-delay: 1.05s;
			}

			.features section:nth-child(8) .icon {
				-moz-transition-delay: 1.2s;
				-webkit-transition-delay: 1.2s;
				-ms-transition-delay: 1.2s;
				transition-delay: 1.2s;
			}

			.features section:nth-child(9) .icon {
				-moz-transition-delay: 1.35s;
				-webkit-transition-delay: 1.35s;
				-ms-transition-delay: 1.35s;
				transition-delay: 1.35s;
			}

			.features section:nth-child(10) .icon {
				-moz-transition-delay: 1.5s;
				-webkit-transition-delay: 1.5s;
				-ms-transition-delay: 1.5s;
				transition-delay: 1.5s;
			}

			.features section:nth-child(11) .icon {
				-moz-transition-delay: 1.65s;
				-webkit-transition-delay: 1.65s;
				-ms-transition-delay: 1.65s;
				transition-delay: 1.65s;
			}

			.features section:nth-child(12) .icon {
				-moz-transition-delay: 1.8s;
				-webkit-transition-delay: 1.8s;
				-ms-transition-delay: 1.8s;
				transition-delay: 1.8s;
			}

			.features section:nth-child(13) .icon {
				-moz-transition-delay: 1.95s;
				-webkit-transition-delay: 1.95s;
				-ms-transition-delay: 1.95s;
				transition-delay: 1.95s;
			}

			.features section:nth-child(14) .icon {
				-moz-transition-delay: 2.1s;
				-webkit-transition-delay: 2.1s;
				-ms-transition-delay: 2.1s;
				transition-delay: 2.1s;
			}

			.features section:nth-child(15) .icon {
				-moz-transition-delay: 2.25s;
				-webkit-transition-delay: 2.25s;
				-ms-transition-delay: 2.25s;
				transition-delay: 2.25s;
			}

			.features section:nth-child(16) .icon {
				-moz-transition-delay: 2.4s;
				-webkit-transition-delay: 2.4s;
				-ms-transition-delay: 2.4s;
				transition-delay: 2.4s;
			}

			.features section:nth-child(17) .icon {
				-moz-transition-delay: 2.55s;
				-webkit-transition-delay: 2.55s;
				-ms-transition-delay: 2.55s;
				transition-delay: 2.55s;
			}

			.features section:nth-child(18) .icon {
				-moz-transition-delay: 2.7s;
				-webkit-transition-delay: 2.7s;
				-ms-transition-delay: 2.7s;
				transition-delay: 2.7s;
			}

			.features section:nth-child(19) .icon {
				-moz-transition-delay: 2.85s;
				-webkit-transition-delay: 2.85s;
				-ms-transition-delay: 2.85s;
				transition-delay: 2.85s;
			}

			.features section:nth-child(20) .icon {
				-moz-transition-delay: 3s;
				-webkit-transition-delay: 3s;
				-ms-transition-delay: 3s;
				transition-delay: 3s;
			}

		.features.inactive section .icon {
			-moz-transform: scale(0.5);
			-webkit-transform: scale(0.5);
			-ms-transform: scale(0.5);
			transform: scale(0.5);
			opacity: 0;
		}

		@media screen and (max-width: 980px) {

			.features {
				display: block;
			}

				.features section {
					border-top-width: 1px !important;
					border-left-width: 0 !important;
					width: 100%;
				}

					.features section:first-child {
						border-top-width: 0 !important;
					}

		}

		@media screen and (max-width: 736px) {

			.features section {
				padding: 2.5em 1.5em 0.1em 5.5em ;
			}

				.features section .icon {
					left: 1.5em;
					top: 2em;
				}

		}

		@media screen and (max-width: 480px) {

			.features section {
				padding: 2em 1.5em 0.1em 1.5em ;
			}

				.features section .icon {
					left: 0;
					position: relative;
					top: 0;
				}

		}

/* Form */

	form {
		margin: 0 0 2em 0;
	}

		form > :last-child {
			margin-bottom: 0;
		}

		form > .fields {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			width: calc(100% + 3em);
			margin: -1.5em 0 2em -1.5em;
		}

			form > .fields > .field {
				-moz-flex-grow: 0;
				-webkit-flex-grow: 0;
				-ms-flex-grow: 0;
				flex-grow: 0;
				-moz-flex-shrink: 0;
				-webkit-flex-shrink: 0;
				-ms-flex-shrink: 0;
				flex-shrink: 0;
				padding: 1.5em 0 0 1.5em;
				width: calc(100% - 1.5em);
			}

				form > .fields > .field.half {
					width: calc(50% - 0.75em);
				}

				form > .fields > .field.third {
					width: calc(100%/3 - 0.5em);
				}

				form > .fields > .field.quarter {
					width: calc(25% - 0.375em);
				}

		@media screen and (max-width: 480px) {

			form > .fields {
				width: calc(100% + 3em);
				margin: -1.5em 0 2em -1.5em;
			}

				form > .fields > .field {
					padding: 1.5em 0 0 1.5em;
					width: calc(100% - 1.5em);
				}

					form > .fields > .field.half {
						width: calc(100% - 1.5em);
					}

					form > .fields > .field.third {
						width: calc(100% - 1.5em);
					}

					form > .fields > .field.quarter {
						width: calc(100% - 1.5em);
					}

		}

	label {
		color: #ffffff;
		font-weight: bold;
		line-height: 1.5;
		margin: 0 0 0.7em 0;
		display: block;
		font-size: 1.1em;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	input[type="tel"],
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 0.25em;
		border: none;
		border: solid 1px rgba(255, 255, 255, 0.15);
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		input[type="tel"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		input[type="tel"]:focus,
		select:focus,
		textarea:focus {
			border-color: #ffffff;
			box-shadow: 0 0 0 1px #ffffff;
		}

	select {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(255, 255, 255, 0.15)' /%3E%3C/svg%3E");
		background-size: 1.25rem;
		background-repeat: no-repeat;
		background-position: calc(100% - 1rem) center;
		height: 2.75em;
		padding-right: 2.75em;
		text-overflow: ellipsis;
	}

		select option {
			color: #ffffff;
			background: #312450;
		}

		select:focus::-ms-value {
			background-color: transparent;
		}

		select::-ms-expand {
			display: none;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		height: 2.75em;
	}

	textarea {
		padding: 0.75em 1em;
	}

		body.is-ie textarea {
			min-height: 10em;
		}

	input[type="checkbox"],
	input[type="radio"] {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		display: block;
		float: left;
		margin-right: -2em;
		opacity: 0;
		width: 1em;
		z-index: -1;
	}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			text-decoration: none;
			color: rgba(255, 255, 255, 0.55);
			cursor: pointer;
			display: inline-block;
			font-size: 1em;
			font-weight: normal;
			padding-left: 2.4em;
			padding-right: 0.75em;
			position: relative;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				display: inline-block;
				font-style: normal;
				font-variant: normal;
				text-rendering: auto;
				line-height: 1;
				text-transform: none !important;
				font-family: 'Font Awesome 5 Free';
				font-weight: 900;
			}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				background: rgba(255, 255, 255, 0.05);
				border-radius: 0.25em;
				border: solid 1px rgba(255, 255, 255, 0.15);
				content: '';
				display: inline-block;
				font-size: 0.8em;
				height: 2.0625em;
				left: 0;
				line-height: 2.0625em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 2.0625em;
			}

		input[type="checkbox"]:checked + label:before,
		input[type="radio"]:checked + label:before {
			background: #ffffff;
			border-color: #ffffff;
			color: #b74e91;
			content: '\f00c';
		}

		input[type="checkbox"]:focus + label:before,
		input[type="radio"]:focus + label:before {
			border-color: #ffffff;
			box-shadow: 0 0 0 1px #ffffff;
		}

	input[type="checkbox"] + label:before {
		border-radius: 0.25em;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

	:-moz-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

	::-moz-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		color: rgba(255, 255, 255, 0.35) !important;
		opacity: 1.0;
	}

/* Icon */

	.icon {
		text-decoration: none;
		border-bottom: none;
		position: relative;
	}

		.icon:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			display: inline-block;
			font-style: normal;
			font-variant: normal;
			text-rendering: auto;
			line-height: 1;
			text-transform: none !important;
			font-family: 'Font Awesome 5 Free';
			font-weight: 400;
		}

		.icon > .label {
			display: none;
		}

		.icon:before {
			line-height: inherit;
		}

		.icon.solid:before {
			font-weight: 900;
		}

		.icon.brands:before {
			font-family: 'Font Awesome 5 Brands';
		}

		.icon.major {
			width: 2.5em;
			height: 2.5em;
			display: block;
			background: #ffffff;
			border-radius: 100%;
			color: #312450;
			text-align: center;
			line-height: 2.5em;
			margin: 0 0 1.3em 0;
		}

			.icon.major:before {
				font-size: 1.25em;
			}

				.wrapper.style1 .icon.major:before {
					color: #5e42a6;
				}

				.wrapper.style1-alt .icon.major:before {
					color: #493382;
				}

				.wrapper.style2 .icon.major:before {
					color: #5052b5;
				}

				.wrapper.style2-alt .icon.major:before {
					color: #3e4094;
				}

				.wrapper.style3 .icon.major:before {
					color: #b74e91;
				}

				.wrapper.style3-alt .icon.major:before {
					color: #953d75;
				}

/* Image */

	.image {
		border-radius: 0.25em;
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image img {
			border-radius: 0.25em;
			display: block;
		}

		.image.left, .image.right {
			max-width: 40%;
		}

			.image.left img, .image.right img {
				width: 100%;
			}

		.image.left {
			float: left;
			margin: 0 1.5em 1em 0;
			top: 0.25em;
		}

		.image.right {
			float: right;
			margin: 0 0 1em 1.5em;
			top: 0.25em;
		}

		.image.fit {
			display: block;
			margin: 0 0 2em 0;
			width: 100%;
		}

			.image.fit img {
				width: 100%;
			}

		.image.main {
			display: block;
			margin: 0 0 3em 0;
			width: 100%;
		}

			.image.main img {
				width: 100%;
			}

/* List */

	ol {
		list-style: decimal;
		margin: 0 0 2em 0;
		padding-left: 1.25em;
	}

		ol li {
			padding-left: 0.25em;
		}

	ul {
		list-style: disc;
		margin: 0 0 2em 0;
		padding-left: 1em;
	}

		ul li {
			padding-left: 0.5em;
		}

		ul.alt {
			list-style: none;
			padding-left: 0;
		}

			ul.alt li {
				border-top: solid 1px rgba(255, 255, 255, 0.15);
				padding: 0.5em 0;
			}

				ul.alt li:first-child {
					border-top: 0;
					padding-top: 0;
				}

	dl {
		margin: 0 0 2em 0;
	}

		dl dt {
			display: block;
			font-weight: bold;
			margin: 0 0 1em 0;
		}

		dl dd {
			margin-left: 2em;
		}

/* Actions */

	ul.actions {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		cursor: default;
		list-style: none;
		margin-left: -1em;
		padding-left: 0;
	}

		ul.actions li {
			padding: 0 0 0 1em;
			vertical-align: middle;
		}

		ul.actions.special {
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			width: 100%;
			margin-left: 0;
		}

			ul.actions.special li:first-child {
				padding-left: 0;
			}

		ul.actions.stacked {
			-moz-flex-direction: column;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			margin-left: 0;
		}

			ul.actions.stacked li {
				padding: 1.3em 0 0 0;
			}

				ul.actions.stacked li:first-child {
					padding-top: 0;
				}

		ul.actions.fit {
			width: calc(100% + 1em);
		}

			ul.actions.fit li {
				-moz-flex-grow: 1;
				-webkit-flex-grow: 1;
				-ms-flex-grow: 1;
				flex-grow: 1;
				-moz-flex-shrink: 1;
				-webkit-flex-shrink: 1;
				-ms-flex-shrink: 1;
				flex-shrink: 1;
				width: 100%;
			}

				ul.actions.fit li > * {
					width: 100%;
				}

			ul.actions.fit.stacked {
				width: 100%;
			}

		@media screen and (max-width: 480px) {

			ul.actions:not(.fixed) {
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				margin-left: 0;
				width: 100% !important;
			}

				ul.actions:not(.fixed) li {
					-moz-flex-grow: 1;
					-webkit-flex-grow: 1;
					-ms-flex-grow: 1;
					flex-grow: 1;
					-moz-flex-shrink: 1;
					-webkit-flex-shrink: 1;
					-ms-flex-shrink: 1;
					flex-shrink: 1;
					padding: 1em 0 0 0;
					text-align: center;
					width: 100%;
				}

					ul.actions:not(.fixed) li > * {
						width: 100%;
					}

					ul.actions:not(.fixed) li:first-child {
						padding-top: 0;
					}

					ul.actions:not(.fixed) li input[type="submit"],
					ul.actions:not(.fixed) li input[type="reset"],
					ul.actions:not(.fixed) li input[type="button"],
					ul.actions:not(.fixed) li button,
					ul.actions:not(.fixed) li .button {
						width: 100%;
					}

						ul.actions:not(.fixed) li input[type="submit"].icon:before,
						ul.actions:not(.fixed) li input[type="reset"].icon:before,
						ul.actions:not(.fixed) li input[type="button"].icon:before,
						ul.actions:not(.fixed) li button.icon:before,
						ul.actions:not(.fixed) li .button.icon:before {
							margin-left: -0.5rem;
						}

		}

/* Contact */

	ul.contact {
		list-style: none;
		padding: 0;
	}

		ul.contact > li {
			padding: 0;
			margin: 1.5em 0 0 0;
		}

			ul.contact > li:first-child {
				margin-top: 0;
			}

/* Icons */

	ul.icons {
		cursor: default;
		list-style: none;
		padding-left: 0;
	}

		ul.icons li {
			display: inline-block;
			padding: 0 0.75em 0 0;
		}

			ul.icons li:last-child {
				padding-right: 0;
			}

			ul.icons li > a, ul.icons li > span {
				border: 0;
			}

				ul.icons li > a .label, ul.icons li > span .label {
					display: none;
				}

/* Menu */

	ul.menu {
		list-style: none;
		padding: 0;
	}

		ul.menu > li {
			border-left: solid 1px rgba(255, 255, 255, 0.15);
			display: inline-block;
			line-height: 1;
			margin-left: 1.5em;
			padding: 0 0 0 1.5em;
		}

			ul.menu > li:first-child {
				border-left: 0;
				margin: 0;
				padding-left: 0;
			}

		@media screen and (max-width: 480px) {

			ul.menu > li {
				border-left: 0;
				display: block;
				line-height: inherit;
				margin: 0.5em 0 0 0;
				padding-left: 0;
			}

		}

/* Section/Article */

	section.special, article.special {
		text-align: center;
	}

	header p {
		color: rgba(255, 255, 255, 0.35);
		position: relative;
		margin: 0 0 1.5em 0;
	}

	header h2 + p {
		font-size: 1.25em;
		margin-top: -1em;
		line-height: 1.5em;
	}

	header h3 + p {
		font-size: 1.1em;
		margin-top: -0.8em;
		line-height: 1.5em;
	}

	header h4 + p,
	header h5 + p,
	header h6 + p {
		font-size: 0.9em;
		margin-top: -0.6em;
		line-height: 1.5em;
	}

/* Split */

	.split {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
	}

		.split > * {
			width: calc(50% - 2.5em);
		}

		.split > :nth-child(2n - 1) {
			padding-right: 2.5em;
			border-right: solid 1px rgba(255, 255, 255, 0.15);
		}

		.split > :nth-child(2n) {
			padding-left: 2.5em;
		}

		.split.style1 > :nth-child(2n - 1) {
			width: calc(66.66666% - 2.5em);
		}

		.split.style1 > :nth-child(2n) {
			width: calc(33.33333% - 2.5em);
		}

		@media screen and (max-width: 1680px) {

			.split > * {
				width: calc(50% - 2em);
			}

			.split > :nth-child(2n - 1) {
				padding-right: 2em;
			}

			.split > :nth-child(2n) {
				padding-left: 2em;
			}

			.split.style1 > :nth-child(2n - 1) {
				width: calc(66.66666% - 2em);
			}

			.split.style1 > :nth-child(2n) {
				width: calc(33.33333% - 2em);
			}

		}

		@media screen and (max-width: 980px) {

			.split {
				display: block;
			}

				.split > * {
					border-top: solid 1px rgba(255, 255, 255, 0.15);
					margin: 4em 0 0 0;
					padding: 4em 0 0 0;
					width: 100% !important;
				}

				.split > :nth-child(2n - 1) {
					border-right: 0;
					padding-right: 0;
				}

				.split > :nth-child(2n) {
					padding-left: 0;
				}

				.split > :first-child {
					border-top: 0;
					margin-top: 0;
					padding-top: 0;
				}

		}

		@media screen and (max-width: 736px) {

			.split > * {
				margin: 3em 0 0 0;
				padding: 3em 0 0 0;
			}

		}

/* Spotlights */

	.spotlights > section {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-direction: row;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		min-height: 22.5em;
	}

		body.is-ie .spotlights > section {
			min-height: 0;
		}

		.spotlights > section > .image {
			background-position: center center;
			background-size: cover;
			border-radius: 0;
			display: block;
			position: relative;
			width: 25em;
		}

			.spotlights > section > .image img {
				border-radius: 0;
				display: block;
			}

			.spotlights > section > .image:before {
				-moz-transition: opacity 1s ease;
				-webkit-transition: opacity 1s ease;
				-ms-transition: opacity 1s ease;
				transition: opacity 1s ease;
				background: rgba(49, 36, 80, 0.9);
				content: '';
				display: block;
				height: 100%;
				left: 0;
				opacity: 0;
				position: absolute;
				top: 0;
				width: 100%;
			}

		.spotlights > section > .content {
			padding: 4em 5em 2em 5em ;
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-direction: column;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			width: 50em;
			-ms-flex: 1;
		}

			.spotlights > section > .content > .inner {
				-moz-transform: translateX(0) translateY(0);
				-webkit-transform: translateX(0) translateY(0);
				-ms-transform: translateX(0) translateY(0);
				transform: translateX(0) translateY(0);
				-moz-transition: opacity 1s ease, -moz-transform 1s ease;
				-webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
				-ms-transition: opacity 1s ease, -ms-transform 1s ease;
				transition: opacity 1s ease, transform 1s ease;
				opacity: 1;
			}

		.spotlights > section:nth-child(2) {
			background-color: rgba(0, 0, 0, 0.05);
		}

		.spotlights > section:nth-child(3) {
			background-color: rgba(0, 0, 0, 0.1);
		}

		.spotlights > section.inactive > .image:before,
		body.is-preload .spotlights > section > .image:before {
			opacity: 1;
		}

		.spotlights > section.inactive > .content > .inner,
		body.is-preload .spotlights > section > .content > .inner {
			-moz-transform: translateX(-1em);
			-webkit-transform: translateX(-1em);
			-ms-transform: translateX(-1em);
			transform: translateX(-1em);
			opacity: 0;
		}

		@media screen and (max-width: 1680px) {

			.spotlights > section > .content {
				padding: 4em 4em 2em 4em ;
			}

		}

		@media screen and (max-width: 980px) {

			.spotlights > section {
				display: block;
			}

				.spotlights > section > .image {
					width: 100%;
					height: 50vh;
				}

				.spotlights > section > .content {
					width: 100%;
				}

				.spotlights > section.inactive > .content > .inner,
				body.is-preload .spotlights > section > .content > .inner {
					-moz-transform: translateY(1em);
					-webkit-transform: translateY(1em);
					-ms-transform: translateY(1em);
					transform: translateY(1em);
				}

		}

		@media screen and (max-width: 736px) {

			.spotlights > section > .image {
				height: 50vh;
				min-height: 15em;
			}

			.spotlights > section > .content {
				padding: 3em 2em 1em 2em ;
			}

		}

/* Table */

	.table-wrapper {
		-webkit-overflow-scrolling: touch;
		overflow-x: auto;
	}

	table {
		margin: 0 0 2em 0;
		width: 100%;
	}

		table tbody tr {
			border: solid 1px rgba(255, 255, 255, 0.15);
			border-left: 0;
			border-right: 0;
		}

			table tbody tr:nth-child(2n + 1) {
				background-color: rgba(255, 255, 255, 0.05);
			}

		table td {
			padding: 0.75em 0.75em;
		}

		table th {
			color: #ffffff;
			font-size: 1em;
			font-weight: bold;
			padding: 0 0.75em 0.75em 0.75em;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px rgba(255, 255, 255, 0.15);
		}

		table tfoot {
			border-top: solid 2px rgba(255, 255, 255, 0.15);
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 1px rgba(255, 255, 255, 0.15);
				border-left-width: 0;
				border-top-width: 0;
			}

				table.alt tbody tr td:first-child {
					border-left-width: 1px;
				}

			table.alt tbody tr:first-child td {
				border-top-width: 1px;
			}

			table.alt thead {
				border-bottom: 0;
			}

			table.alt tfoot {
				border-top: 0;
			}

/* Wrapper */

	.wrapper {
		position: relative;
	}

		.wrapper > .inner {
			padding: 5em 5em 3em 5em ;
			max-width: 100%;
			width: 75em;
		}

			@media screen and (max-width: 1680px) {

				.wrapper > .inner {
					padding: 4em 4em 2em 4em ;
				}

			}

			@media screen and (max-width: 1280px) {

				.wrapper > .inner {
					width: 100%;
				}

			}

			@media screen and (max-width: 736px) {

				.wrapper > .inner {
					padding: 3em 2em 1em 2em ;
				}

			}

		.wrapper.alt {
			background-color: #261c3e;
		}

		.wrapper.style1 {
			background-color: #5e42a6;
		}

		.wrapper.style1-alt {
			background-color: #493382;
		}

		.wrapper.style2 {
			background-color: #5052b5;
		}

		.wrapper.style2-alt {
			background-color: #3e4094;
		}

		.wrapper.style3 {
			background-color: #b74e91;
		}

		.wrapper.style3-alt {
			background-color: #953d75;
		}

		.wrapper.fullscreen {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-direction: column;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			min-height: 100vh;
		}

			body.is-ie .wrapper.fullscreen {
				height: 100vh;
			}

			@media screen and (max-width: 1280px) {

				.wrapper.fullscreen {
					min-height: calc(100vh - 2.5em);
				}

					body.is-ie .wrapper.fullscreen {
						height: calc(100vh - 2.5em);
					}

			}

			@media screen and (max-width: 736px) {

				.wrapper.fullscreen {
					padding: 2em 0;
					min-height: 0;
				}

					body.is-ie .wrapper.fullscreen {
						height: auto;
					}

			}

		.wrapper.fade-up > .inner {
			-moz-transform: translateY(0);
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
			-moz-transition: opacity 1s ease, -moz-transform 1s ease;
			-webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
			-ms-transition: opacity 1s ease, -ms-transform 1s ease;
			transition: opacity 1s ease, transform 1s ease;
			opacity: 1.0;
		}

		.wrapper.fade-up.inactive > .inner,
		body.is-preload .wrapper.fade-up > .inner {
			opacity: 0;
			-moz-transform: translateY(1em);
			-webkit-transform: translateY(1em);
			-ms-transform: translateY(1em);
			transform: translateY(1em);
		}

		.wrapper.fade-down > .inner {
			-moz-transform: translateY(0);
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
			-moz-transition: opacity 1s ease, -moz-transform 1s ease;
			-webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
			-ms-transition: opacity 1s ease, -ms-transform 1s ease;
			transition: opacity 1s ease, transform 1s ease;
			opacity: 1.0;
		}

		.wrapper.fade-down.inactive > .inner,
		body.is-preload .wrapper.fade-down > .inner {
			opacity: 0;
			-moz-transform: translateY(-1em);
			-webkit-transform: translateY(-1em);
			-ms-transform: translateY(-1em);
			transform: translateY(-1em);
		}

		.wrapper.fade > .inner {
			-moz-transition: opacity 1s ease;
			-webkit-transition: opacity 1s ease;
			-ms-transition: opacity 1s ease;
			transition: opacity 1s ease;
			opacity: 1.0;
		}

		.wrapper.fade.inactive > .inner,
		body.is-preload .wrapper.fade > .inner {
			opacity: 0;
		}

/* Header */

	#header {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		background-color: #5e42a6;
		cursor: default;
		padding: 1.75em 2em;
	}

		#header > .title {
			border: 0;
			color: #ffffff;
			display: block;
			font-size: 1.25em;
			font-weight: bold;
		}

		#header > nav {
			-moz-flex: 1;
			-webkit-flex: 1;
			-ms-flex: 1;
			flex: 1;
			text-align: right;
		}

			#header > nav > ul {
				margin: 0;
				padding: 0;
			}

				#header > nav > ul > li {
					display: inline-block;
					margin-left: 1.75em;
					padding: 0;
					vertical-align: middle;
				}

					#header > nav > ul > li:first-child {
						margin-left: 0;
					}

					#header > nav > ul > li a {
						border: 0;
						color: rgba(255, 255, 255, 0.35);
						display: inline-block;
						font-size: 0.6em;
						font-weight: bold;
						letter-spacing: 0.25em;
						text-transform: uppercase;
					}

						#header > nav > ul > li a:hover {
							color: rgba(255, 255, 255, 0.55);
						}

						#header > nav > ul > li a.active {
							color: #ffffff;
						}

		@media screen and (max-width: 736px) {

			#header {
				padding: 1em 2em;
			}

		}

		@media screen and (max-width: 480px) {

			#header {
				display: block;
				padding: 0 2em;
				text-align: left;
			}

				#header .title {
					font-size: 1.25em;
					padding: 1em 0;
				}

				#header > nav {
					border-top: solid 1px rgba(255, 255, 255, 0.15);
					text-align: inherit;
				}

					#header > nav > ul > li {
						margin-left: 1.5em;
					}

						#header > nav > ul > li a {
							height: 6em;
							line-height: 6em;
						}

		}

/* Wrapper (main) */

	#sidebar + #wrapper {
		margin-left: 18em;
	}

		@media screen and (max-width: 1280px) {

			#sidebar + #wrapper {
				margin-left: 0;
				padding-top: 3.5em;
			}

		}

		@media screen and (max-width: 736px) {

			#sidebar + #wrapper {
				padding-top: 0;
			}

		}

	#header + #wrapper > .wrapper > .inner {
		margin: 0 auto;
	}

/* Footer */

	#sidebar + #wrapper + #footer {
		margin-left: 18em;
	}

		@media screen and (max-width: 1280px) {

			#sidebar + #wrapper + #footer {
				margin-left: 0;
			}

		}

	#footer > .inner a {
		border-bottom-color: rgba(255, 255, 255, 0.15);
	}

		#footer > .inner a:hover {
			border-bottom-color: transparent;
		}

	#footer > .inner .menu {
		font-size: 0.8em;
		color: rgba(255, 255, 255, 0.15);
	}

	#header + #wrapper + #footer > .inner {
		margin: 0 auto;
	}

/* Sidebar */

	#sidebar {
		padding: 2.5em 2.5em 0.5em 2.5em ;
		background: #312450;
		cursor: default;
		height: 100vh;
		left: 0;
		overflow-x: hidden;
		overflow-y: auto;
		position: fixed;
		text-align: right;
		top: 0;
		width: 18em;
		z-index: 10000;
	}

		#sidebar > .inner {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-direction: column;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			-moz-transform: translateY(0);
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
			-moz-transition: opacity 1s ease;
			-webkit-transition: opacity 1s ease;
			-ms-transition: opacity 1s ease;
			transition: opacity 1s ease;
			min-height: 100%;
			opacity: 1;
			width: 100%;
		}

			body.is-ie #sidebar > .inner {
				height: 100%;
			}

		#sidebar nav > ul {
			list-style: none;
			padding: 0;
		}

			#sidebar nav > ul > li {
				-moz-transform: translateY(0);
				-webkit-transform: translateY(0);
				-ms-transform: translateY(0);
				transform: translateY(0);
				-moz-transition: opacity 0.15s ease, -moz-transform 0.75s ease;
				-webkit-transition: opacity 0.15s ease, -webkit-transform 0.75s ease;
				-ms-transition: opacity 0.15s ease, -ms-transform 0.75s ease;
				transition: opacity 0.15s ease, transform 0.75s ease;
				margin: 1.5em 0 0 0;
				opacity: 1;
				padding: 0;
				position: relative;
			}

				#sidebar nav > ul > li:first-child {
					margin: 0;
				}

				#sidebar nav > ul > li:nth-child(1) {
					-moz-transition-delay: 0.45s;
					-webkit-transition-delay: 0.45s;
					-ms-transition-delay: 0.45s;
					transition-delay: 0.45s;
				}

				#sidebar nav > ul > li:nth-child(2) {
					-moz-transition-delay: 0.65s;
					-webkit-transition-delay: 0.65s;
					-ms-transition-delay: 0.65s;
					transition-delay: 0.65s;
				}

				#sidebar nav > ul > li:nth-child(3) {
					-moz-transition-delay: 0.85s;
					-webkit-transition-delay: 0.85s;
					-ms-transition-delay: 0.85s;
					transition-delay: 0.85s;
				}

				#sidebar nav > ul > li:nth-child(4) {
					-moz-transition-delay: 1.05s;
					-webkit-transition-delay: 1.05s;
					-ms-transition-delay: 1.05s;
					transition-delay: 1.05s;
				}

				#sidebar nav > ul > li:nth-child(5) {
					-moz-transition-delay: 1.25s;
					-webkit-transition-delay: 1.25s;
					-ms-transition-delay: 1.25s;
					transition-delay: 1.25s;
				}

				#sidebar nav > ul > li:nth-child(6) {
					-moz-transition-delay: 1.45s;
					-webkit-transition-delay: 1.45s;
					-ms-transition-delay: 1.45s;
					transition-delay: 1.45s;
				}

				#sidebar nav > ul > li:nth-child(7) {
					-moz-transition-delay: 1.65s;
					-webkit-transition-delay: 1.65s;
					-ms-transition-delay: 1.65s;
					transition-delay: 1.65s;
				}

				#sidebar nav > ul > li:nth-child(8) {
					-moz-transition-delay: 1.85s;
					-webkit-transition-delay: 1.85s;
					-ms-transition-delay: 1.85s;
					transition-delay: 1.85s;
				}

				#sidebar nav > ul > li:nth-child(9) {
					-moz-transition-delay: 2.05s;
					-webkit-transition-delay: 2.05s;
					-ms-transition-delay: 2.05s;
					transition-delay: 2.05s;
				}

				#sidebar nav > ul > li:nth-child(10) {
					-moz-transition-delay: 2.25s;
					-webkit-transition-delay: 2.25s;
					-ms-transition-delay: 2.25s;
					transition-delay: 2.25s;
				}

				#sidebar nav > ul > li:nth-child(11) {
					-moz-transition-delay: 2.45s;
					-webkit-transition-delay: 2.45s;
					-ms-transition-delay: 2.45s;
					transition-delay: 2.45s;
				}

				#sidebar nav > ul > li:nth-child(12) {
					-moz-transition-delay: 2.65s;
					-webkit-transition-delay: 2.65s;
					-ms-transition-delay: 2.65s;
					transition-delay: 2.65s;
				}

				#sidebar nav > ul > li:nth-child(13) {
					-moz-transition-delay: 2.85s;
					-webkit-transition-delay: 2.85s;
					-ms-transition-delay: 2.85s;
					transition-delay: 2.85s;
				}

				#sidebar nav > ul > li:nth-child(14) {
					-moz-transition-delay: 3.05s;
					-webkit-transition-delay: 3.05s;
					-ms-transition-delay: 3.05s;
					transition-delay: 3.05s;
				}

				#sidebar nav > ul > li:nth-child(15) {
					-moz-transition-delay: 3.25s;
					-webkit-transition-delay: 3.25s;
					-ms-transition-delay: 3.25s;
					transition-delay: 3.25s;
				}

				#sidebar nav > ul > li:nth-child(16) {
					-moz-transition-delay: 3.45s;
					-webkit-transition-delay: 3.45s;
					-ms-transition-delay: 3.45s;
					transition-delay: 3.45s;
				}

				#sidebar nav > ul > li:nth-child(17) {
					-moz-transition-delay: 3.65s;
					-webkit-transition-delay: 3.65s;
					-ms-transition-delay: 3.65s;
					transition-delay: 3.65s;
				}

				#sidebar nav > ul > li:nth-child(18) {
					-moz-transition-delay: 3.85s;
					-webkit-transition-delay: 3.85s;
					-ms-transition-delay: 3.85s;
					transition-delay: 3.85s;
				}

				#sidebar nav > ul > li:nth-child(19) {
					-moz-transition-delay: 4.05s;
					-webkit-transition-delay: 4.05s;
					-ms-transition-delay: 4.05s;
					transition-delay: 4.05s;
				}

				#sidebar nav > ul > li:nth-child(20) {
					-moz-transition-delay: 4.25s;
					-webkit-transition-delay: 4.25s;
					-ms-transition-delay: 4.25s;
					transition-delay: 4.25s;
				}

		#sidebar nav a {
			-moz-transition: color 0.2s ease;
			-webkit-transition: color 0.2s ease;
			-ms-transition: color 0.2s ease;
			transition: color 0.2s ease;
			border: 0;
			color: rgba(255, 255, 255, 0.35);
			display: block;
			font-size: 0.6em;
			font-weight: bold;
			letter-spacing: 0.25em;
			line-height: 1.75;
			outline: 0;
			padding: 1.35em 0;
			position: relative;
			text-decoration: none;
			text-transform: uppercase;
		}

			#sidebar nav a:before, #sidebar nav a:after {
				border-radius: 0.2em;
				bottom: 0;
				content: '';
				height: 0.2em;
				position: absolute;
				right: 0;
				width: 100%;
			}

			#sidebar nav a:before {
				background: #3c2c62;
			}

			#sidebar nav a:after {
				background-image: -moz-linear-gradient(to right, #5e42a6, #b74e91);
				background-image: -webkit-linear-gradient(to right, #5e42a6, #b74e91);
				background-image: -ms-linear-gradient(to right, #5e42a6, #b74e91);
				background-image: linear-gradient(to right, #5e42a6, #b74e91);
				-moz-transition: max-width 0.2s ease;
				-webkit-transition: max-width 0.2s ease;
				-ms-transition: max-width 0.2s ease;
				transition: max-width 0.2s ease;
				max-width: 0;
			}

			#sidebar nav a:hover {
				color: rgba(255, 255, 255, 0.55);
			}

			#sidebar nav a.active {
				color: #ffffff;
			}

				#sidebar nav a.active:after {
					max-width: 100%;
				}

		body.is-preload #sidebar > .inner {
			opacity: 0;
		}

		body.is-preload #sidebar nav ul li {
			-moz-transform: translateY(2em);
			-webkit-transform: translateY(2em);
			-ms-transform: translateY(2em);
			transform: translateY(2em);
			opacity: 0;
		}

		@media screen and (max-width: 1280px) {

			#sidebar {
				height: 3.5em;
				left: 0;
				line-height: 3.5em;
				overflow: hidden;
				padding: 0;
				text-align: center;
				top: 0;
				width: 100%;
			}

				#sidebar > .inner {
					-moz-flex-direction: row;
					-webkit-flex-direction: row;
					-ms-flex-direction: row;
					flex-direction: row;
					-moz-align-items: -moz-stretch;
					-webkit-align-items: -webkit-stretch;
					-ms-align-items: -ms-stretch;
					align-items: stretch;
					height: inherit;
					line-height: inherit;
				}

				#sidebar nav {
					height: inherit;
					line-height: inherit;
				}

					#sidebar nav ul {
						display: -moz-flex;
						display: -webkit-flex;
						display: -ms-flex;
						display: flex;
						height: inherit;
						line-height: inherit;
						margin: 0;
					}

						#sidebar nav ul li {
							display: block;
							height: inherit;
							line-height: inherit;
							margin: 0 0 0 2em;
							padding: 0;
						}

					#sidebar nav a {
						height: inherit;
						line-height: inherit;
						padding: 0;
					}

						#sidebar nav a:after {
							background-image: none;
							background-color: #b74e91;
						}

		}

		@media screen and (max-width: 736px) {

			#sidebar {
				display: none;
			}

		}

/* Intro */

	#intro {
		background-attachment: fixed;
		background-image: url("images/intro.svg");
		background-position: top right;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

		#intro p {
			font-size: 1.25em;
		}

			@media screen and (max-width: 980px) {

				#intro p br {
					display: none;
				}

			}

			@media screen and (max-width: 736px) {

				#intro p {
					font-size: 1em;
				}

			}

		@media screen and (max-width: 1280px) {

			#intro {
				background-attachment: scroll;
			}

        }
</style>
`;