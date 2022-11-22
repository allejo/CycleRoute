-- Terminal: pg_dump -d nameOfDatabase;
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

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
-- Name: favorites; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    sub character varying(255) NOT NULL,
    start_location character varying(255) NOT NULL,
    end_location character varying(255) NOT NULL,
    distance character varying(255),
    duration character varying(255),
    start_lat double precision NOT NULL,
    start_long double precision NOT NULL,
    end_lat double precision NOT NULL,
    end_long double precision NOT NULL,
    notes character varying(500)
);


ALTER TABLE public.favorites OWNER TO tpl522_10;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

ALTER TABLE public.favorites ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.favorites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.users (
    id integer NOT NULL,
    fistname character varying(255),
    username character varying(255),
    email character varying(255) NOT NULL,
    sub character varying(255),
    image character varying(255)
);


ALTER TABLE public.users OWNER TO tpl522_10;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO tpl522_10;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.favorites (id, sub, start_location, end_location, distance, duration, start_lat, start_long, end_lat, end_long, notes) FROM stdin;
2	auth0|636d86daf2ea62cc6a5f3267	Vermont / 3rd	University of Southern California	4.0 mi	25 mins	34.06895539999999	-118.291235	34.0223519	-118.285117	\N
3	google-oauth2|111184663178301448473	University of California, Los Angeles	Santa Monica Pier	5.9 mi	5.9 mi	34.068921	-118.4451811	34.0082821	-118.4987585	
1	google-oauth2|111184663178301448473	Vermont / 3rd	University of Southern California	4.0 mi	25 mins	34.06895539999999	-118.291235	34.0223519	-118.285117	sdvsdv
12	google-oauth2|111184663178301448473	USC Village	USC Viterbi School of Engineering	\N	\N	34.0256262	-118.285044	34.0206453	-118.2895082	diana 's favorite ride
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.users (id, fistname, username, email, sub, image) FROM stdin;
3	\N	\N	babygirl12032097@aol.com	auth0|636d86daf2ea62cc6a5f3267	https://s.gravatar.com/avatar/cd21bd885409a3b835adc662466f3be1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fba.png
2	\N	Xochc2	xocaid@gmail.com	google-oauth2|111184663178301448473	https://lh3.googleusercontent.com/a/ALm5wu1nfTre2M5-lHKqa_HBF6JK4PV_UXuE5ejdtPOQ=s96-c
\.


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.favorites_id_seq', 12, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_sub_key; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_sub_key UNIQUE (sub);


--
-- Name: favorites favorites_sub_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_sub_fkey FOREIGN KEY (sub) REFERENCES public.users(sub);


--
-- PostgreSQL database dump complete
--

~ 
