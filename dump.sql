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
    "idUser" integer NOT NULL
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
    name character varying(255) NOT NULL
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
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: postTags; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.posts VALUES (1, 'https://trello.com/b/GdA0MABm/projet%C3%A3o-linkr', 'Trello projetão', 1);
INSERT INTO public.posts VALUES (13, 'https://www.google.com/', 'Muito Muito maneiro esse tutorial de Material UI com React, deem uma olhada!', 1);
INSERT INTO public.posts VALUES (16, 'https://marmalade-cereal-22d.notion.site/Linkr-b6ff4e02570f4241b2e69545e58a5e67', 'link do nosso notion', 6);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 'tokendousuario', 1);
INSERT INTO public.sessions VALUES (8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY2NjYxNjgzMCwiZXhwIjoxNjY2NjE3NDMwfQ.rCbz98LSEMjXyVJsie8VwdXcY9JXluhnto6mi3Sh59Q', 6);


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'teste', 'teste@gmail.com', 'teste', 'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/the-office/cast-the-office-michael-scott.jpg/_jcr_content/renditions/original.JPEG');
INSERT INTO public.users VALUES (2, 'teste2', 'teste2@gmail.com', 'teste2', 'https://static.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest?cb=20170701082424');
INSERT INTO public.users VALUES (5, 'Bruno', 'teste02@gmail.com', '$2b$10$znV1ZQAb5RstoUCxvU4nVeGXtTlIFGSvZ15lq0UB/HBkw61VgPP5a', 'data:image/jpeg;base64,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');
INSERT INTO public.users VALUES (6, 'Bruno 01', 'teste03@gmail.com', '$2b$10$Avv2zQR5lz/3aRWBd3GgbevGrwwYvA2K0QMvE3BrKxXZ5YRrGBGKy', 'data:image/jpeg;base64,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');
INSERT INTO public.users VALUES (7, 'Bruno 02', 'teste04@gmail.com', '$2b$10$RGylyB912wYDfvNmMNAOBuP/Q.y7xKCVlhSS49HTA8S8Q9DrE07TG', 'https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603__340.png');
INSERT INTO public.users VALUES (8, 'bruno00', 'bruno@gmail.com', '$2b$10$h.RuTaS5.MzhZl7SC/nB4OjzCsYdAlM.WK0NiPFdvjmTfp43HiYLe', 'https://sm.ign.com/ign_br/screenshot/default/goku_trw2.jpg');


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 1, false);


--
-- Name: postTags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."postTags_id_seq"', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_id_seq', 16, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 9, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tags_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 8, true);


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
-- Name: sessions sessions_fk_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk_user FOREIGN KEY ("idUser") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

