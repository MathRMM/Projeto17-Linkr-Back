--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: commentaries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.commentaries (
    id integer NOT NULL,
    "idAuthorComm" integer NOT NULL,
    "idPost" integer NOT NULL,
    commentary text NOT NULL,
    "isPostAuthor" boolean DEFAULT false NOT NULL
);


--
-- Name: commentaries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.commentaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: commentaries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.commentaries_id_seq OWNED BY public.commentaries.id;


--
-- Name: following; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.following (
    id integer NOT NULL,
    "idUserFollowing" integer NOT NULL,
    "idUser" integer NOT NULL
);


--
-- Name: following_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.following_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: following_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.following_id_seq OWNED BY public.following.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    "idUser" integer NOT NULL,
    "idPostLiked" integer NOT NULL
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: postTags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."postTags" (
    id integer NOT NULL,
    "idTag" integer NOT NULL,
    "idPost" integer NOT NULL
);


--
-- Name: postTags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."postTags_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: postTags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."postTags_id_seq" OWNED BY public."postTags".id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    link text NOT NULL,
    "postText" text,
    "idUser" integer NOT NULL,
    title character varying(250) DEFAULT NULL::character varying,
    image text,
    description text
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: reposts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.reposts (
    id integer NOT NULL,
    "idUser" integer NOT NULL,
    "idPost" integer NOT NULL
);


--
-- Name: reposts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.reposts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: reposts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.reposts_id_seq OWNED BY public.reposts.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token character varying(255),
    "idUser" integer NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    visitcount integer
);


--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email text NOT NULL,
    password character varying(255) NOT NULL,
    "picUrl" text DEFAULT ''::text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: commentaries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commentaries ALTER COLUMN id SET DEFAULT nextval('public.commentaries_id_seq'::regclass);


--
-- Name: following id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.following ALTER COLUMN id SET DEFAULT nextval('public.following_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: postTags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."postTags" ALTER COLUMN id SET DEFAULT nextval('public."postTags_id_seq"'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: reposts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reposts ALTER COLUMN id SET DEFAULT nextval('public.reposts_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: commentaries; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.commentaries VALUES (2, 2, 1, 'Adorei esse post, ajuda muito a usar Material UI com React!', false);
INSERT INTO public.commentaries VALUES (3, 1, 1, 'Também achei, mudou minha vida', true);
INSERT INTO public.commentaries VALUES (4, 4, 1, 'Gostei não.', false);
INSERT INTO public.commentaries VALUES (5, 4, 1, 'Muito dificil de entender', false);
INSERT INTO public.commentaries VALUES (6, 4, 2, 'Ta atrasado eim', false);
INSERT INTO public.commentaries VALUES (7, 6, 2, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (8, 6, 2, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (9, 6, 2, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (10, 6, 2, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (11, 6, 2, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (12, 6, 2, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (13, 6, 2, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (14, 6, 2, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (15, 6, 1, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (16, 6, 1, 'Legalzão', false);
INSERT INTO public.commentaries VALUES (17, 7, 2, 'adww', false);
INSERT INTO public.commentaries VALUES (18, 7, 2, 'haha', false);
INSERT INTO public.commentaries VALUES (19, 7, 1, 'adww', false);
INSERT INTO public.commentaries VALUES (20, 7, 2, 'da', false);
INSERT INTO public.commentaries VALUES (21, 7, 3, 'opa', true);


--
-- Data for Name: following; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.following VALUES (1, 4, 2);
INSERT INTO public.following VALUES (2, 1, 2);
INSERT INTO public.following VALUES (3, 6, 2);


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.likes VALUES (1, 7, 1);


--
-- Data for Name: postTags; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.posts VALUES (1, 'http://localhost:8080/user/1', 'link do nosso projeto', 1, NULL, NULL, NULL);
INSERT INTO public.posts VALUES (2, 'https://www.google.com/', 'muito legal esse site de pesquisa', 1, NULL, NULL, NULL);
INSERT INTO public.posts VALUES (3, 'https://bootcampra.notion.site/Artigo-Deploy-de-aplica-es-back-end-no-Heroku-SQL-96ff4f6b854a4f4fa17a4f783edce785', 'como fazer deploy no heroku', 7, 'Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.', 'https://www.notion.so/images/meta/default.png', 'A new tool that blends your everyday work apps into one. It''s the all-in-one workspace for you and your team');


--
-- Data for Name: reposts; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY2Njg5Nzg3MywiZXhwIjoxNjY3NTAyNjczfQ.c3akRw196LQWWyhas-LsqtsqvESwrYDUfBHpZRuYqBc', 6);
INSERT INTO public.sessions VALUES (25, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsImlhdCI6MTY2Njk3OTUzOSwiZXhwIjoxNjY3NTg0MzM5fQ.o38BwwB15FQ3YMUpeVst7M0IH7HwIxl695UX-GIj0U0', 7);


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'teste2', 'teste2@gmail.com', 'teste2', 'https://www.w3schools.com/w3css/img_avatar3.png');
INSERT INTO public.users VALUES (2, 'teste', 'teste@gmail.com', 'teste', 'https://www.w3schools.com/w3css/img_avatar3.png');
INSERT INTO public.users VALUES (4, 'teste3', 'teste3@gmail.com', 'teste3', 'https://www.w3schools.com/w3css/img_avatar3.png');
INSERT INTO public.users VALUES (6, 'Bruno 02', 'teste04@gmail.com', '$2b$10$ZUv850KmFYiaWwsQL.ieT.A3vm34dgD9PPSn91ikRchISOeHFYFEW', 'https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603__340.png');
INSERT INTO public.users VALUES (7, 'brunoteste', 'brunoteste@gmail.com', '$2b$10$UU8LvSeiuBp/EWTsqOKO/eNx9u8Kz2TTS899sD7SFQvNppO50R0t.', 'https://listasnerds.com.br/wp-content/uploads/2022/01/goku-dragon-ball-9-850x560.jpg');


--
-- Name: commentaries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.commentaries_id_seq', 21, true);


--
-- Name: following_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.following_id_seq', 3, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 1, true);


--
-- Name: postTags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."postTags_id_seq"', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_id_seq', 3, true);


--
-- Name: reposts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.reposts_id_seq', 1, false);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 25, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tags_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: commentaries commentaries_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commentaries
    ADD CONSTRAINT commentaries_pk PRIMARY KEY (id);


--
-- Name: following following_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.following
    ADD CONSTRAINT following_pk PRIMARY KEY (id);


--
-- Name: likes likes_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pk PRIMARY KEY (id);


--
-- Name: postTags postTags_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."postTags"
    ADD CONSTRAINT "postTags_pk" PRIMARY KEY (id);


--
-- Name: posts posts_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pk PRIMARY KEY (id);


--
-- Name: reposts reposts_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reposts
    ADD CONSTRAINT reposts_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_idUser_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_idUser_key" UNIQUE ("idUser");


--
-- Name: sessions sessions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pk PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: tags tags_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pk PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_password_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_password_key UNIQUE (password);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: commentaries commentaries_idAuthorComm_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commentaries
    ADD CONSTRAINT "commentaries_idAuthorComm_fkey" FOREIGN KEY ("idAuthorComm") REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: commentaries commentaries_idPost_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commentaries
    ADD CONSTRAINT "commentaries_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: following following_idUserFollowing_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.following
    ADD CONSTRAINT "following_idUserFollowing_fkey" FOREIGN KEY ("idUserFollowing") REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: following following_idUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.following
    ADD CONSTRAINT "following_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: likes likes_fk_post; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_fk_post FOREIGN KEY ("idPostLiked") REFERENCES public.posts(id);


--
-- Name: likes likes_fk_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_fk_user FOREIGN KEY ("idUser") REFERENCES public.users(id);


--
-- Name: likes likes_idPostLiked_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_idPostLiked_fkey" FOREIGN KEY ("idPostLiked") REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: likes likes_idUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: postTags postTags_fk_post; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."postTags"
    ADD CONSTRAINT "postTags_fk_post" FOREIGN KEY ("idPost") REFERENCES public.posts(id);


--
-- Name: postTags postTags_fk_tag; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."postTags"
    ADD CONSTRAINT "postTags_fk_tag" FOREIGN KEY ("idTag") REFERENCES public.tags(id);


--
-- Name: postTags postTags_idPost_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."postTags"
    ADD CONSTRAINT "postTags_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: postTags postTags_idTag_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."postTags"
    ADD CONSTRAINT "postTags_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES public.tags(id) ON DELETE CASCADE;


--
-- Name: posts posts_fk_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_fk_user FOREIGN KEY ("idUser") REFERENCES public.users(id);


--
-- Name: reposts reposts_idPost_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reposts
    ADD CONSTRAINT "reposts_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES public.posts(id) ON DELETE CASCADE;


--
-- Name: reposts reposts_idUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reposts
    ADD CONSTRAINT "reposts_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: sessions sessions_fk_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk_user FOREIGN KEY ("idUser") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

