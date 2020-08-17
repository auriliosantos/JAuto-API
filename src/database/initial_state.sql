PGDMP         /    
            x            d8ero968q45i6a     12.3 (Ubuntu 12.3-1.pgdg16.04+1)    12.3 Z    v           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            w           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            x           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            y           1262    13366079    d8ero968q45i6a    DATABASE     �   CREATE DATABASE d8ero968q45i6a WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE d8ero968q45i6a;
                xfgtoetlupyabn    false            z           0    0    DATABASE d8ero968q45i6a    ACL     A   REVOKE CONNECT,TEMPORARY ON DATABASE d8ero968q45i6a FROM PUBLIC;
                   xfgtoetlupyabn    false    3961            {           0    0    LANGUAGE plpgsql    ACL     1   GRANT ALL ON LANGUAGE plpgsql TO xfgtoetlupyabn;
                   postgres    false    691            �            1259    13637963    clients    TABLE     �   CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    birthday date NOT NULL,
    marital_status_id integer NOT NULL
);
    DROP TABLE public.clients;
       public         heap    xfgtoetlupyabn    false            �            1259    13637961    clients_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public          xfgtoetlupyabn    false    217            |           0    0    clients_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
          public          xfgtoetlupyabn    false    216            �            1259    13637936    deductible_types    TABLE     l   CREATE TABLE public.deductible_types (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
 $   DROP TABLE public.deductible_types;
       public         heap    xfgtoetlupyabn    false            �            1259    13637934    deductible_types_id_seq    SEQUENCE     �   CREATE SEQUENCE public.deductible_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.deductible_types_id_seq;
       public          xfgtoetlupyabn    false    211            }           0    0    deductible_types_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.deductible_types_id_seq OWNED BY public.deductible_types.id;
          public          xfgtoetlupyabn    false    210            �            1259    13637995 
   insurances    TABLE     Z  CREATE TABLE public.insurances (
    id integer NOT NULL,
    proposal_number character varying(255) NOT NULL,
    policy character varying(255) NOT NULL,
    validity_start date NOT NULL,
    validity_end date NOT NULL,
    installments character varying(255) NOT NULL,
    bonus_class character varying(255) NOT NULL,
    total_premium character varying(255) NOT NULL,
    observations character varying(255) NOT NULL,
    insurer_id integer NOT NULL,
    client_id integer NOT NULL,
    vehicle_id integer NOT NULL,
    deductible_type_id integer NOT NULL,
    payment_method_id integer NOT NULL
);
    DROP TABLE public.insurances;
       public         heap    xfgtoetlupyabn    false            �            1259    13637993    insurances_id_seq    SEQUENCE     �   CREATE SEQUENCE public.insurances_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.insurances_id_seq;
       public          xfgtoetlupyabn    false    221            ~           0    0    insurances_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.insurances_id_seq OWNED BY public.insurances.id;
          public          xfgtoetlupyabn    false    220            �            1259    13637952    insurers    TABLE     �   CREATE TABLE public.insurers (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    support_phone character varying(255) NOT NULL
);
    DROP TABLE public.insurers;
       public         heap    xfgtoetlupyabn    false            �            1259    13637950    insurers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.insurers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.insurers_id_seq;
       public          xfgtoetlupyabn    false    215                       0    0    insurers_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.insurers_id_seq OWNED BY public.insurers.id;
          public          xfgtoetlupyabn    false    214            �            1259    13637904    knex_migrations    TABLE     �   CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);
 #   DROP TABLE public.knex_migrations;
       public         heap    xfgtoetlupyabn    false            �            1259    13637902    knex_migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.knex_migrations_id_seq;
       public          xfgtoetlupyabn    false    203            �           0    0    knex_migrations_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;
          public          xfgtoetlupyabn    false    202            �            1259    13637912    knex_migrations_lock    TABLE     `   CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);
 (   DROP TABLE public.knex_migrations_lock;
       public         heap    xfgtoetlupyabn    false            �            1259    13637910    knex_migrations_lock_index_seq    SEQUENCE     �   CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.knex_migrations_lock_index_seq;
       public          xfgtoetlupyabn    false    205            �           0    0    knex_migrations_lock_index_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;
          public          xfgtoetlupyabn    false    204            �            1259    13637920    marital_statuses    TABLE     l   CREATE TABLE public.marital_statuses (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
 $   DROP TABLE public.marital_statuses;
       public         heap    xfgtoetlupyabn    false            �            1259    13637918    marital_statuses_id_seq    SEQUENCE     �   CREATE SEQUENCE public.marital_statuses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.marital_statuses_id_seq;
       public          xfgtoetlupyabn    false    207            �           0    0    marital_statuses_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.marital_statuses_id_seq OWNED BY public.marital_statuses.id;
          public          xfgtoetlupyabn    false    206            �            1259    13637944    payment_methods    TABLE     k   CREATE TABLE public.payment_methods (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
 #   DROP TABLE public.payment_methods;
       public         heap    xfgtoetlupyabn    false            �            1259    13637942    payment_methods_id_seq    SEQUENCE     �   CREATE SEQUENCE public.payment_methods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.payment_methods_id_seq;
       public          xfgtoetlupyabn    false    213            �           0    0    payment_methods_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.payment_methods_id_seq OWNED BY public.payment_methods.id;
          public          xfgtoetlupyabn    false    212            �            1259    13637928    usage_types    TABLE     g   CREATE TABLE public.usage_types (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.usage_types;
       public         heap    xfgtoetlupyabn    false            �            1259    13637926    usage_types_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usage_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.usage_types_id_seq;
       public          xfgtoetlupyabn    false    209            �           0    0    usage_types_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.usage_types_id_seq OWNED BY public.usage_types.id;
          public          xfgtoetlupyabn    false    208            �            1259    13638031    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    hash character varying(255) NOT NULL
);
    DROP TABLE public.users;
       public         heap    xfgtoetlupyabn    false            �            1259    13638029    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          xfgtoetlupyabn    false    223            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          xfgtoetlupyabn    false    222            �            1259    13637979    vehicles    TABLE       CREATE TABLE public.vehicles (
    id integer NOT NULL,
    year character varying(255) NOT NULL,
    model character varying(255) NOT NULL,
    chassis character varying(255) NOT NULL,
    plate character varying(255) NOT NULL,
    usage_type_id integer NOT NULL
);
    DROP TABLE public.vehicles;
       public         heap    xfgtoetlupyabn    false            �            1259    13637977    vehicles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vehicles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.vehicles_id_seq;
       public          xfgtoetlupyabn    false    219            �           0    0    vehicles_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.vehicles_id_seq OWNED BY public.vehicles.id;
          public          xfgtoetlupyabn    false    218            �           2604    13637966 
   clients id    DEFAULT     h   ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);
 9   ALTER TABLE public.clients ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    216    217    217            �           2604    13637939    deductible_types id    DEFAULT     z   ALTER TABLE ONLY public.deductible_types ALTER COLUMN id SET DEFAULT nextval('public.deductible_types_id_seq'::regclass);
 B   ALTER TABLE public.deductible_types ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    210    211    211            �           2604    13637998    insurances id    DEFAULT     n   ALTER TABLE ONLY public.insurances ALTER COLUMN id SET DEFAULT nextval('public.insurances_id_seq'::regclass);
 <   ALTER TABLE public.insurances ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    220    221    221            �           2604    13637955    insurers id    DEFAULT     j   ALTER TABLE ONLY public.insurers ALTER COLUMN id SET DEFAULT nextval('public.insurers_id_seq'::regclass);
 :   ALTER TABLE public.insurers ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    214    215    215            �           2604    13637907    knex_migrations id    DEFAULT     x   ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);
 A   ALTER TABLE public.knex_migrations ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    202    203    203            �           2604    13637915    knex_migrations_lock index    DEFAULT     �   ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);
 I   ALTER TABLE public.knex_migrations_lock ALTER COLUMN index DROP DEFAULT;
       public          xfgtoetlupyabn    false    204    205    205            �           2604    13637923    marital_statuses id    DEFAULT     z   ALTER TABLE ONLY public.marital_statuses ALTER COLUMN id SET DEFAULT nextval('public.marital_statuses_id_seq'::regclass);
 B   ALTER TABLE public.marital_statuses ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    206    207    207            �           2604    13637947    payment_methods id    DEFAULT     x   ALTER TABLE ONLY public.payment_methods ALTER COLUMN id SET DEFAULT nextval('public.payment_methods_id_seq'::regclass);
 A   ALTER TABLE public.payment_methods ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    213    212    213            �           2604    13637931    usage_types id    DEFAULT     p   ALTER TABLE ONLY public.usage_types ALTER COLUMN id SET DEFAULT nextval('public.usage_types_id_seq'::regclass);
 =   ALTER TABLE public.usage_types ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    208    209    209            �           2604    13638034    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    223    222    223            �           2604    13637982    vehicles id    DEFAULT     j   ALTER TABLE ONLY public.vehicles ALTER COLUMN id SET DEFAULT nextval('public.vehicles_id_seq'::regclass);
 :   ALTER TABLE public.vehicles ALTER COLUMN id DROP DEFAULT;
       public          xfgtoetlupyabn    false    219    218    219            m          0    13637963    clients 
   TABLE DATA           Q   COPY public.clients (id, name, address, birthday, marital_status_id) FROM stdin;
    public          xfgtoetlupyabn    false    217   bk       g          0    13637936    deductible_types 
   TABLE DATA           4   COPY public.deductible_types (id, name) FROM stdin;
    public          xfgtoetlupyabn    false    211   k       q          0    13637995 
   insurances 
   TABLE DATA           �   COPY public.insurances (id, proposal_number, policy, validity_start, validity_end, installments, bonus_class, total_premium, observations, insurer_id, client_id, vehicle_id, deductible_type_id, payment_method_id) FROM stdin;
    public          xfgtoetlupyabn    false    221   �k       k          0    13637952    insurers 
   TABLE DATA           ;   COPY public.insurers (id, name, support_phone) FROM stdin;
    public          xfgtoetlupyabn    false    215   �k       _          0    13637904    knex_migrations 
   TABLE DATA           J   COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
    public          xfgtoetlupyabn    false    203   �l       a          0    13637912    knex_migrations_lock 
   TABLE DATA           @   COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
    public          xfgtoetlupyabn    false    205   nm       c          0    13637920    marital_statuses 
   TABLE DATA           4   COPY public.marital_statuses (id, name) FROM stdin;
    public          xfgtoetlupyabn    false    207   �m       i          0    13637944    payment_methods 
   TABLE DATA           3   COPY public.payment_methods (id, name) FROM stdin;
    public          xfgtoetlupyabn    false    213   �m       e          0    13637928    usage_types 
   TABLE DATA           /   COPY public.usage_types (id, name) FROM stdin;
    public          xfgtoetlupyabn    false    209   7n       s          0    13638031    users 
   TABLE DATA           /   COPY public.users (id, name, hash) FROM stdin;
    public          xfgtoetlupyabn    false    223   �n       o          0    13637979    vehicles 
   TABLE DATA           R   COPY public.vehicles (id, year, model, chassis, plate, usage_type_id) FROM stdin;
    public          xfgtoetlupyabn    false    219   �n       �           0    0    clients_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.clients_id_seq', 1, false);
          public          xfgtoetlupyabn    false    216            �           0    0    deductible_types_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.deductible_types_id_seq', 2, true);
          public          xfgtoetlupyabn    false    210            �           0    0    insurances_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.insurances_id_seq', 1, false);
          public          xfgtoetlupyabn    false    220            �           0    0    insurers_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.insurers_id_seq', 12, true);
          public          xfgtoetlupyabn    false    214            �           0    0    knex_migrations_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.knex_migrations_id_seq', 9, true);
          public          xfgtoetlupyabn    false    202            �           0    0    knex_migrations_lock_index_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);
          public          xfgtoetlupyabn    false    204            �           0    0    marital_statuses_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.marital_statuses_id_seq', 5, true);
          public          xfgtoetlupyabn    false    206            �           0    0    payment_methods_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.payment_methods_id_seq', 3, true);
          public          xfgtoetlupyabn    false    212            �           0    0    usage_types_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.usage_types_id_seq', 3, true);
          public          xfgtoetlupyabn    false    208            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          xfgtoetlupyabn    false    222            �           0    0    vehicles_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.vehicles_id_seq', 1, false);
          public          xfgtoetlupyabn    false    218            �           2606    13637971    clients clients_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            xfgtoetlupyabn    false    217            �           2606    13637941 &   deductible_types deductible_types_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.deductible_types
    ADD CONSTRAINT deductible_types_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.deductible_types DROP CONSTRAINT deductible_types_pkey;
       public            xfgtoetlupyabn    false    211            �           2606    13638003    insurances insurances_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT insurances_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.insurances DROP CONSTRAINT insurances_pkey;
       public            xfgtoetlupyabn    false    221            �           2606    13637960    insurers insurers_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.insurers
    ADD CONSTRAINT insurers_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.insurers DROP CONSTRAINT insurers_pkey;
       public            xfgtoetlupyabn    false    215            �           2606    13637917 .   knex_migrations_lock knex_migrations_lock_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);
 X   ALTER TABLE ONLY public.knex_migrations_lock DROP CONSTRAINT knex_migrations_lock_pkey;
       public            xfgtoetlupyabn    false    205            �           2606    13637909 $   knex_migrations knex_migrations_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.knex_migrations DROP CONSTRAINT knex_migrations_pkey;
       public            xfgtoetlupyabn    false    203            �           2606    13637925 &   marital_statuses marital_statuses_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.marital_statuses
    ADD CONSTRAINT marital_statuses_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.marital_statuses DROP CONSTRAINT marital_statuses_pkey;
       public            xfgtoetlupyabn    false    207            �           2606    13637949 $   payment_methods payment_methods_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.payment_methods
    ADD CONSTRAINT payment_methods_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.payment_methods DROP CONSTRAINT payment_methods_pkey;
       public            xfgtoetlupyabn    false    213            �           2606    13637933    usage_types usage_types_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usage_types
    ADD CONSTRAINT usage_types_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.usage_types DROP CONSTRAINT usage_types_pkey;
       public            xfgtoetlupyabn    false    209            �           2606    13638039    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            xfgtoetlupyabn    false    223            �           2606    13637987    vehicles vehicles_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT vehicles_pkey;
       public            xfgtoetlupyabn    false    219            �           2606    13637972 )   clients clients_marital_status_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_marital_status_id_foreign FOREIGN KEY (marital_status_id) REFERENCES public.marital_statuses(id) ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_marital_status_id_foreign;
       public          xfgtoetlupyabn    false    217    207    3784            �           2606    13638009 '   insurances insurances_client_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT insurances_client_id_foreign FOREIGN KEY (client_id) REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.insurances DROP CONSTRAINT insurances_client_id_foreign;
       public          xfgtoetlupyabn    false    221    3794    217            �           2606    13638019 0   insurances insurances_deductible_type_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT insurances_deductible_type_id_foreign FOREIGN KEY (deductible_type_id) REFERENCES public.deductible_types(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public.insurances DROP CONSTRAINT insurances_deductible_type_id_foreign;
       public          xfgtoetlupyabn    false    221    3788    211            �           2606    13638004 (   insurances insurances_insurer_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT insurances_insurer_id_foreign FOREIGN KEY (insurer_id) REFERENCES public.insurers(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.insurances DROP CONSTRAINT insurances_insurer_id_foreign;
       public          xfgtoetlupyabn    false    215    221    3792            �           2606    13638024 /   insurances insurances_payment_method_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT insurances_payment_method_id_foreign FOREIGN KEY (payment_method_id) REFERENCES public.payment_methods(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.insurances DROP CONSTRAINT insurances_payment_method_id_foreign;
       public          xfgtoetlupyabn    false    3790    221    213            �           2606    13638014 (   insurances insurances_vehicle_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT insurances_vehicle_id_foreign FOREIGN KEY (vehicle_id) REFERENCES public.vehicles(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.insurances DROP CONSTRAINT insurances_vehicle_id_foreign;
       public          xfgtoetlupyabn    false    219    221    3796            �           2606    13637988 '   vehicles vehicles_usage_type_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vehicles_usage_type_id_foreign FOREIGN KEY (usage_type_id) REFERENCES public.usage_types(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.vehicles DROP CONSTRAINT vehicles_usage_type_id_foreign;
       public          xfgtoetlupyabn    false    209    219    3786            m      x������ � �      g   !   x�3���/�M��2�JM)��LI����� _��      q      x������ � �      k   �   x�%���0E�3_����0�ĕ&����M�j��J����ޜsr��� T�k.PA5���B���M��h�fV:o?�*�����m�MX=%�`�ѦM$&8����oE2�4p��3�u���!�aW�W�[Lr)�	���S�\�d�[x�m���AVP���.���~�d����	b8      _   �   x����j� ���W�������R�HWH�%N
��]R�����	�>�)p�sX3����T��P��"��W��� ��w�Nʆ�>��������Ӏ��1�[�|��Ś��P7��9-����������}�y)ۚ��\5ph&N�wH��NWcM3���t<�
BY�?���	�{?H�O8D©�������u      a      x�3�4������ V      c   @   x�3���)I�,��H��2�tN,NL��9]2��R2�|ΰ�û��lSN�Ғ��b�=... ��      i   H   x�3�t��I-�WpJ�K>��(3�ˈ�9�����|��T��+S2K�9]�L�Rs���J�b���� ��      e   A   x�3�t��M-J�L��2�H,*�L.�I,�2�(J-.I<����|��T��Ԣ�����b���� D.J      s      x������ � �      o      x������ � �     