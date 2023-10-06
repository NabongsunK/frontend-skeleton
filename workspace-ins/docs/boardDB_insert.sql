use boarddb;

INSERT INTO user (name, email, password, profileImage) VALUES ('김철수', 'a@a', '$2b$10$TealkbT/ihUqfEFyBVyt/e4IHdBhXMIgyxJCOKgEd8fi7zwqOmvOe', 'team/team-1.jpg');
INSERT INTO user (name, email, password, profileImage) VALUES ('이영희', 'b@b', '$2b$10$/R.2tYA69Em6dstJZF7oIeTS5so34LaONEvzgsVR9DkOBgh/9CBlm', 'team/team-2.jpg');

INSERT INTO board (title, content, userId, attachFile, attachFileName) VALUES ('샘플1', '샘플 데이터1', 1, 'boards/첨부파일1_2343545345.zip', '첨부파일1.zip');
INSERT INTO board (title, content, userId, attachFile) VALUES ('샘플2', '샘플 데이터2', 2, 'boards/attach2.zip');
INSERT INTO board (title, content, userId) VALUES ('샘플3', '샘플 데이터3', 1);
INSERT INTO board (title, content, userId) VALUES ('샘플4', '샘플 데이터4', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플5', '샘플 데이터5', 1);
INSERT INTO board (title, content, userId) VALUES ('샘플6', '샘플 데이터6', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플7', '샘플 데이터7', 1);
INSERT INTO board (title, content, userId) VALUES ('샘플8', '샘플 데이터8', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플9', '샘플 데이터9', 1);
INSERT INTO board (title, content, userId) VALUES ('샘플10', '샘플 데이터10', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플11', '샘플 데이터11', 1);
INSERT INTO board (title, content, userId) VALUES ('샘플12', '샘플 데이터12', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플13', '샘플 데이터13', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플14', '샘플 데이터14', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플15', '샘플 데이터15', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플16', '샘플 데이터16', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플17', '샘플 데이터17', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플18', '샘플 데이터18', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플19', '샘플 데이터19', 2);
INSERT INTO board (title, content, userId) VALUES ('샘플20', '샘플 데이터20', 2);


INSERT INTO board_comment (boardId, content, userId) VALUES (1, '댓글1', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (1, '댓글2', 2);
INSERT INTO board_comment (boardId, content, userId) VALUES (2, '댓글3', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (2, '댓글4', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글1', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글2', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글3', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글4', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글5', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글6', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글7', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글8', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글9', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글10', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글11', 1);
INSERT INTO board_comment (boardId, content, userId) VALUES (20, '댓글12', 1);