import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DestinationCard from "../../components/ReusableComponents/DestinationCard";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./Dashboard.css";
import { User } from "@nextui-org/react";
import ProfileCard from "../../components/ReusableComponents/ProfileCard";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState([
    {
      imgURL:
        "https://www.savaari.com/blog/wp-content/uploads/2021/12/Travel-Manali-view-point-87239-pixahive.jpg",
      name: "Nurturing Nature",
      desName: "Manali",
      price: 10000,
      desc: "Discover the unmatched levels of enthusiasm with our latest and most popular complete package of tour of Manali",
      vrModel: {
        title: "Manali",
        modelURL:
          "https://sketchfab.com/models/54ae07902bfa420e9c14a8f1d870e740/embed",
        modelAuthor: "shraddhakushwaha",
        modelTitle: "Manali",
      },
    },
    {
      imgURL:
        "https://images.hindustantimes.com/img/2022/09/10/550x309/central_vista_revellers_latest_news_1662770038066_1662770038195_1662770038195.jpg",
      name: "Whatever it takes!",
      desName: "Delhi",
      price: 50000,
      desc: "Perfect for group of friends, this package is a complete package of fun and adventure. You'll get to explore the hidden and unexplored places of Mukteshwar and including it, you'll get to experience the best of the best.",
      vrModel: {
        title: "Qutub Minar",
        modelURL:
          "https://sketchfab.com/models/59fe55328271479d82acb65310178d99/embed",
        modelTitle: "Qutub Minar",
        modelAuthor: "shraddhakushwaha",
      },
    },
    {
      imgURL:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/now-that-ram-mandir-in-ayodhya-has-been-inaugurated--the-city-is-set-to-witness-a-major-tourism-boom-253817519-16x9_0.jpg?VersionId=uF7qAYqwGBgIlWs8R9hOF55RQG0lMLSa&size=690:388",
      name: "Ayodhya - The Dream",
      desName: "Ayodhya",
      price: 20000,
      desc: "This package is a complete package of bhakti and devotion. You'll be experiencing Shri Ram ",
      vrModel: {
        title: "Ram Mandir",
        modelURL:
          "https://sketchfab.com/models/d182f51001644521b66a8b013892c6fc/embed",
        modelTitle: "Ram Mandir",
        modelAuthor: "shraddhakushwaha",
      },
    },
    {
      imgURL: "https://live.staticflickr.com/2370/31951271234_193987193f_b.jpg",
      name: "The Grand Dubai Tour",
      desName: "Dubai",
      price: 200000,
      desc: "Experience the vibrant allure of Dubai with our Great Dubai Tour package. Dive into the mesmerizing blend of modernity and tradition as you explore iconic landmarks like the Burj Khalifa, Palm Jumeirah, and the Dubai Mall.",
      vrModel: {
        title: "Dubai City",
        modelAuthor: "shraddhakushwaha",
        modelURL:
          "https://sketchfab.com/models/04847e60f32449c3b8a04431c555d175/embed",
        modelTitle: "Dubai City",
      },
    },
    {
      imgURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhUZGRgYGhoYGBkcGhgZHBoaGBkaGRgYGBocIS4mHB4rIRgYJjgmLC8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQkISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADsQAAIBAwMCBAMHAwIGAwEAAAECEQADIRIxQQRRBSJhcTKBkQYTQqGxwfAU0eFSghVicpKy8SMzouL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEBAQACAgICAwAAAAAAAAABEQIhMRJBUWETcQMigf/aAAwDAQACEQMRAD8A9LoqBKPVgBXRADbqpt00QKDpoAaasLdHC1GWjIGiqlKJViKNBKlcdKMKtFGQbSU2oqiJTnTWJqVpy0KZQyKq/TkZij2lgUCHUWdRzWb1NoivQXKzeotnPrQYT252qrpitA244pe5boyQFuuMlOi3XGtVQh93XPu6ca3QylAAihsKO4oJFAIiqkUY1WKAemqstG013TQLG3VdFNFKqVoF9FcK0YiqkVAHTXavFdoPXhqsDQjjeuzWgaa4TQw1d1UaErjVRXoypioyCa4TUdCOKjW4E0HAaLbSSB3oC030h8woHLPRdzWlasiPalhePGKuLh71loZnABEe1AUZqFqqDQXuCkeoWnS1KvmgV+7kUM9LinUWrMlNGY9gCgPbrVdKSvpVCDJS7oa0dNDuJVZZTUIrT72JNBeyQNqBEiu6abTp+aq9qgCq1crXFrrmgG1DarE1NBoAmqxRvuzXdFAvFSj/AHRqUHqbgBpdqMxoTNVFNVXtmTVDXbAhhQNpZzNMhaqtcL1Ghopfqh5asLlRmBEGoEFp3pVk0P7kUe0IEUGhqWKoGoAauq1QM6qgNB1V3VQGmuFRQNdER6grpruquM9Bu3KC5NL3TFdF2qMZrQHoxQ2tTTCirolAEdMIoN5K0wlAe1QJf0oIxWfd6c1uqkYqjWPSqy861r0rhsTW4ek9KP0/QiRQY/T+G6qZPhsDAr0liyFwRRGVT7VnVx5NfDT2rqeG16h+nFK3EAppjE/oR2/KuU6130qVUAahMKMRVSlbAlFHtAb1VFroXipQbXVS9XS33rl22ThRWWgy9TWaY6foQN8mnrPSqNxNNGVbJYwDTAUimHtoMgAGl3apoupq4NCWrigvNUZ6jPQXegsXqwu0uzUJrlA092l3eh/eVVmmgItyrpco3hvRBzE09d8I00CdtqcsLMYpm10QRZ39KJb8oxTQvcA4oS2yabuQcmupcApqYVXpzvVjbpo3BVWcGr8jCTpXLbQaZuJFCdKmqK/Ug8VUSaltKNIoBme9Bu2zFMAiq3TOKaMxrRrlN/dmu1RnMlc0USuVtkMipMVZqpoNQEsGTTyJSYbSKsnVr3rNGkgrjNFKr1a966L4PNTF1xzS7Gu3L4pM3vWrIacVqhuUBbgrjPTDRWegs9UZ6GamGrs1CarV1UmqoWaJZssTTlrpAa0elsqtTQPwfyvnati6+c0ugUbCqPdmoCM1U11TVVHeqLu+KEaqTVlBoIk1ZJG9QVbVQS53rgYVC1UaKC4euUEvFWV6YmixUJrgNWoappqVzXUorxnTfay2wAdGQ91hh78EfnVrv2ltQdKOx42UfvXi0OJxRbZjnHOavPWe/LnXrvDvHdQOtkXtmn718KNerjAkfOvCwDMfTJx70W1fuLB1YUyAe7Y2rpfjfMqS2eK1ev8AtK8aVA339KQufaJ24AHpMzVE8Na4SZI3ny85wBPp3FJdT0LIxWJI2wRPb4qTvj1EzpoL9pXCwEE9yZp3pPtQQvnXPMGMfOvN/wBOSQplTP8ApmBweKDcssvz2nn12mKu808x6Hr/ALROx8hK87D6Gazf+KXsE3Hx6mP7VmLPy71cvzj5Y+dbmT0bWgnjN5chyffNbXR/ajygOknuDv3NeTJJz+4/c1A1LJU2x9D6fxyw0eePfFaVshtiDXyxbm1eh6L7QMrDGNjOfpXPrj8NTr8vbC3V7dusfp/tAjbVoWfGEOwrlW5Y07IpokCsux4ijcEe9GPVqTAJ9+Ki6Le6vSQKul2RNZV7rbTvo1jUPlPoKLY6gCRMn+1a+PhPk0gwroes9Op3qNfA5pOafJog1YPXnOr+0VtCVksRwsQPczWF1P2suknRCjjGo+0nf6VMPk99roXUeIWra6rjhR8yZ7BRk187v+MdQ/xO8dh5frpH5UrJJktJOCScz2/Klpr2HW/a1FMW0L+rEIO22SfyrNf7X3t9NofJz7/irCc+kcZ7z/N6olskzMxyCDt3zWdNbdz7V9Qw8oQeyGedtRjilD9ouqn/AOw9vgSCDiYjcYpFbZnA1cwBuO4z796o9gTtxyTsBjffip8ga94nfb4rz5385A/7QYH04pf+vuA6tbFgd5JI2GDVm6RYidXEAjH54/m29cTo1neD6zH1iP8A1TYj2/Q+JsbayZMZJiT71K8h9y/DVKfKLrztskftTNq4D8Q+kfzt9KGqAwY+px8qjL22xjkd/fEbVqocQHjAO++R27cUxoFthPmVT+E4OxjIyKQ+/wBIgNJidMfyaslwMQASM+sfTioPQJfZw2goYWGQgKSAPjEYOB6RG21LKmoAaYgkCV1RzIk4IPI7+tZRtsMiSBg5G2w5n+9HS/cHnOVMjVggkZMnvH6c1M/AfBIMrcUmI3YMwmDAyMSeRSt2xMnST8Q06hqgEfEBnn8jWz0HX23EXIUZE6cNIgksDn8Od+1C65LbRpQqGkBgNIJGNzErIPek6xXnb3SSYQEwAY5wM+pEz9KVE7/2+lbn3AkDUoccBogYM6hmcjAHHrSN7pmPAnbHptnY/sIrtz0xYQ1TXQp32/ztHf5VeGGMQYnH78GquPr+VdJ0zi+hhmDBE7Gr2+5WR/eqWlbAkgExkiD86M9lkOlgskT5SDg7QRg/KrphjpW3jbeBn+CtewpYYE8ds1k2OlJXWuwMGZ3AHbfcVqWSyoMwwkAKDk4wWiD8u9cuv01zBLPWMnBj149idq7Z6y4jGDIMyDHI7nnbapY1sZCH8p77x3n69qdTw1z5gkH1O/vFY9KWtpq8zRscAgnI1ZHeqgsh3Mbd/pGfyrRXo3tozs6IPxMRq/Xkz2rB6nrHZtmCg48sfPtMe8Vrnq81OpLGpe8SRQDqJO2kCI92/wDdJdV1150JAcJHqAQImCcnfis1bT6p0k+sTPHyBxRrrNEMIjyiSBAzxPv9BWuv8lv2nPMhJX9PkBRVcA5H7f4pi10veYYYhCNxvMCiKiqdLCQMS077wDicZ+dc71GsUVyYjM9jEkb6SOf71bzGYkavffGfl+5qo65AoneQpMQDE7gkxED+DMfxIdjxkMc4xMbDaufn8KKqEg7TxkZAz29vpUtHgAyPNESY5gYxM7dga50zByQoaQDBUzAPocdtu1VS+ADLgMq7NjOD5gRuRzUuqogbY7zsJxnIgcQQZoz2tWMyJwTnHY/570rd8XBkKSZzAaOOJ4zxQx4lceNDIhO8ntnJ2B+VPjUMtZOc4jHGTx9J/maFaR5BBMZ4E8TknagXvECdMsNjqHPpuI4xSl/rnYg/LsY9e4ya1OaNR7+cgj6VK85cd5MAfIn+9Stfx/tNMoDjIn0nO1E1xuMc7mI5qqWTE5geox7flVQQed87fr3rKmFsg54OAYJB9P5t9aa6jpU0DQoL6oJ1ZAIODxG3rIpK45xjHZRAn0jH5c0az1TQy7gxM9xMD86uiAllEZOzYggjk8Hcj5Voqr6FgkqpDDK4O4wN/pSdqCTphYg8c5jG55+Zpq3c0xAgtic8DvMERUo0f6UOmpGVHyXQD4jgeVI3gTC7kUjc6DqEJDAkCTrHlCqCZyeRExk0yjMzIo06jADT3IjVHEjJjHyrTdPMHdypG7Hz27mgEGSTOomcGAc+tSX8rmsq504AtgsHgAtkMSGJ1DUMyCIMDn0od1UlQbbooBLNJIiPw8Y4zW47p5jbtW0SfjYKAJh4CjtqJ25rqdcEKJpD21QMxICawNigmSsgjnftSdLjzN7pFkhHLZw0ZI5Jx7/X5Vax4eWVwUBYZnDYOeMg87c16FeuR2d7aox/0i2pOgkEyd4GBWl09tLoD6EH4mgBTwFHlYT/APz86vzJzteKPQlRrKtoMbLiPfY8H+TRk8Nt6VdixmdgVbnGZGDE+9ets+GIwkOdWwXaBiNSxKt3Gduao/g9ryo9wowOloIYEn4dJ52g+4rX8lT4sXpek1roBVVxgBdbQF8xO+4Na3T9DbQSdIjcsRidpJ2p1fCrKFQEXV/vBB8okQcjI/fY1ieLX7CPoVEcxMLP/wCi2MEn698UvfgvONa71lm2MtqPCrBJ/Yd5JFZ3U/aFtBIUIeZYMQDsdsbjg71iOW8rAqfSVOmTiBiczihWeqOSNLxgjzYnuAdvTNYt1Dx60uSXZjA1LJJiQJluBtwNvQ0UuIIDQSGJkTIOBkgYmTJ7issdeV1EwCREFNRgTHmiZA9TuaAtw/6nIH+o6t+fi9oxOKfHRuKeWAZcAwYBxjKEYkcx9DBRbU5YaFfcxueJUcnb859KVbrvLpBJLQAQJxMkNOYycSMe1Lv1fn8rqrA4WYM4wQPrtuaTmmtY9P5Q2sgQPgy0xGQ3ExtmkPEbbIQvneSVSUZWLK0BROWMRXB17JkMdZEycKDq5EZJzQPv31F8b6i0j8RkhdM+u44qyYuzBOk6UFyt5mQAeYEBPbBOMxmk+osqDIYMDmRkcwDn27US9fYks66iRBJ24Ikbd/ShqWCDywOAeSZiD29PWt+UBLwcGNXGc88HbfNW+/ctBOdxBJ+ZJOwptZO6eWMwNwc/KfzriXgsKqAat5DSfTOam/pC7J8WrAA3EekfyK592YGmCRjUZ2ONuefzpl3V9kEnYxER3E8UG5YmZ8qqQJA0z6kD9OasqADTtn3JImewrj2yxhcdz3gdztVneFwpOYnE7xidhS9x2Z51DA43ieIO31rPXfxawx/THv8Amp/epShvkfiX8x+1Sp/KY0LMy2AANXOSB/PaiIiscyPpHaDSAvg7Zxt7ce1US+S+8CJ9j2orTPTAKSGMhhMnuZj03GKCwC7kehGxGJA+dLJ1MhpG3lnOB27RiuP1xDQI07xuI9uaGNZGIOTg7YEyOJ5p3pbaPgtpKyRtkiDBAGZHPtWAOqUQwG7Z7RH+DQk6sKQM7mYMTJzJ9jH1qYmNq676E8mkgEbEGSYmOMR+1aFnxeU0uJM7T5WBEecEwcj8683cDhlhjDHy5mBMZ7bj61rt4TdtWjceGAbSQrjExDZA7H1ztTGp4a3TeJIgQoIKiHJKljI3WUJEkjM4A25Ar5tm+GJ+8kIAQzIZPl0b+w354rATpWCKxdFMHymSzYGkJiCfi7bc8Lp1jIQNQK/Ex07cjc4O+fSn9DdW9aTUVtuhD7ZOtQfMpDZH1xGxqreMKiwmlXDEkiYIZcYPYnbahN4TdZSXQKVBPmdUAEx5dMgnA+tIDw9igaEZceaVBPeSfNxsB+lUuxa74tcf4bjLEgeYg5Hw7/8AVt3ofVXnTSwvs5InnyZkZk964eidNbm0xRVx+LMwTIPHr225q/VddZcIoRUkAeWANgoJ/wBRJ396eEC/4m7EFrjGNRALHJb4p/WtFOusvbYFCryIZSSxCsoJ7CQ3Pb1rL6nw/SgfQQJwdQIyJ2BkCMgmkrIAadZUGJJE75NXwZZ7eqs2VR0OHtQ2skwSuAJDfiztHG9a1noOmZC4RFCiTKBiF7trU42yCdhWD/wplsveZjgkwV8hXV5SrcySMRWeXYjSz6SxiBktsIGdI3HNZ9/ay59NlOpVMo2SWkEBgA2YAg4mJPECKT65kUCRE4Bw2NyWBPORQLXgXVoVbQRE7nG0DAkc0103VPbClhgCGJRGUtMaparM32eyVi7ypVSwggk6t9QWT7VpdN1LgnySrfENKaTHeBB339T88/qPFHLFvuxpGE8pRY+Qg84pR+uZjAX0Bjf8vatWam2eqe6nr0B+EDUTAUgKATgDsPTj8qB0gYefT2BY/DOInUYPvSaB41wFbA+IGfWBPr7QKu7lyUUHcgz+cCZj8s1UO9UyhtLKB3OAFxG475+tC/qmBwNJ4074xknjb3mk+oskkrqEDcmZwAO28mjLY0iC0Ex7nEnbaIjnenjA43UlhttBLGCCw9B+3ar9MxLKrXdJZgCSJgkweffH51m/1AYHdWGVidhwe4zSi+LOsq6E5OZ/xmuHc63wY9UbdpSHN3Wrb6sbYhlOV/8A1tSniXWqAsIBOSQxI3/CWbH+a8r1fXKxh0IjYg5+m1N2vE1VYaNgAQg/k1LelxpG4GAOiZmYhYPOqd6AvSoeNB9iSZ3g4jfbPyrtq2rQVZPNBEqonvt/MVXqLV0GFUN6NpGO429OaxL+wJ+ntzkknmdI/epQ9N3vp/5ZGPT4alXb+TT/AEyIxU3HaGGmFWWGJVsmDvt/7pvrPCulBY27zygzqCsHMkDTERt6xI9qw9Q3BiAcx6cD6UyeonMSOMCe+3P+a7bg2+u6TprZtaTqJtu1w6mAL6NSDc6QTv6Gleg8DF+w95CA4ITTjYBTqiZXG8A7HvSfTdWquG0hgBkbYG4jadq1et8eLIRaUIsGQNPYEadIG2foKfJfftmp4fodkeCVEkqSwYbypxtt9fSmep6awLbO486tblCWRyrNvBGJAbPbMZBrOTxF9auJ1ExO3ABP5z863uo8Ot9SEdXi5cK/eK2ojQpjVsBMCZBNP7RndT06OBdR41aTo8zuHaSWBxsVHHbvnZu+Ko7aWtykBig0xOo+ZtQ1GY5gADFV8M+z5R3X71ArN5GaA2kbFgQM5GMTHtDr9IhZwrtcVNSsn3aqC6hcC4/fUTiBHyll6Xfi8+3jDpauNBDtc1LjAnTrOkjTBwJ9TQepvK9i2gZVZWliZgiMSQN/NGe29Ua49y/oCC2pkESWVViDiZI2ECi+LeGCyvxggmY0ldJCiAQTqg77dqTnFvdvi1o+BW7To/nuM+llZVhgJmIJEBT33BGCJrz6PdtBVYRk7+hWZPuD+fEU14L1H3Zcqqa9Pl1CRq1AT3+Et9a0WtXL6hr1t1QNI0aSDJJACzMEiJ9BTU+lPE+vvm0xRWRNKE6Q4WT8cD3396N4R4+q6ECBjot6GGyu4JuTGFGqNgMzNaF6290i4SwUKoZXOSFPmwMxE53/AFrzvi9+6l3S6fd9tI0/eJMJnOoCJHaTzTJYst58xq/aDqPvLZQFQ+uWMtBCgheI5GYyRXnunV2JBErB+I4Eg7eu8R+W9MdPbe64AcSZjknGVAn57034v4ZcRAEDZOVBnYfhPJjjjianykual6tvlo+J3/uelS25Ui4pAgs0bNue070hd8MYWRfPntsxACZlSJDCRggjPsPmpbvOulHOoxAXhcBiCNyTM7ftWl4F4T/VW/J1DIto6GQqGw7M7EGQFklhkHaJ7WLevl9K2vGL+dIOhkZW2nIHmzMMN5Hb5Vn3OrZ0CEHQnwjPOQzkYPYHFNdV4KLLEffh9OnSYj1MrmDnb+1I9dcZSG3USMCUMdzGduaeGbKMQqIhZ9eoCT8MAidIWcDcA/8Aqrdb4iPuk6c2rZVTqVlBDyS0jUMkQ2xxt2pFrAeDbks34cA4PxZO0jf14olzo7gkKGCqPMDJLGSDtPYVoF6fqmRHRFAMEjIJJEwCNzOaY8OsM6EuxUgExKowhskKwlpHAjcGcRWO7n4tBBmNWlhvAEnnamR0/UhTcNl9JyWI4AiSDkY9MUwM9Z0yKyw9xl3CHSxkeqmNO/FIMvmJBxviTziQaq/WAEDUcD/lGe4xV3/+NRBJLGSYIgkYH+as8FWRmUTrDsfmBuT7mTQbjgqdQyRJI99gNx61GRmYhDAURJMZMk/uap9zJhtgfiGSQIAj/NZ6ISfp9QJUzpBwd8HOed/yqptNG0ae+ZPMEUx1HQy3k94G4jg9996q2iQrHSN8CWHuJrLQieIssSAQfxRB94FPW/FwQofciDImZPp+1ZL9OJ8rFl4MQf8At44EVX7vVtk/p71i881Men/qZ2ZY4yh/epXk7ljJz+UVKn8U/KfFoK+YUDI/Mb0ZDpJbtgCN5/TP60br7SI4FsnTGrJBMknGOwHPafY3Q3giFyyjEadIZz6LqBC5nYVb1/rsA+s6F0gFQrFdYzIyxweNX+KXtXGVirCGAyGxuARM8wR9a3h4iVJAby6YE6NwBgQMZg7f4xOvRGcsr5YAkmGDGO6nG1Z47tuWACOswREZ7ZnMxv8A4FbfSeMNaGlSCABojOCZIJOYAI/7awD051MJEYznM5xz71exbZiRgaJgHE+gJxxvXWwfRuotG4i3EfzRHl1kH/VLLg7DHHJq7WigUO4Q6SWJghiTiVOMBRv3ry32O6otde07sEVbp0jUSGDWzOlMttj2PE0z474mlxHUeXQWUcAkRO57DmnpbPyb6/rVYujaH0yEkIMgYYFR8+K8vf6T/wCA3fvFhrgTRB1gqCMnaMg/yKp/VeVV2AABGT/u9DVrTloQPEtqGDAK7+1XUDRFgGSuDJ4aNyvrn2xXrfBPHEQBHYlXkkdyWBJb/b2H9q8bLkkFdRMxznAJ3xtV0DowZwUzzgRGcDI/waqyvp3R9Xcd0tpoawUY6ws+cMNIbsePkczFJfavojctFWQM9twQRvpwx0z3GgRzXien8ea26MpJCkkrJAPm5447RtTY+0Fz7x3RjDPqIaMzPxACMAA4NT6JYV8MuIGDoI0lYYE5n0O20DFex6N0KC8FYsxyjNDq4MHDECP+b+xrw/U3tYLKQH1SY0gQdwByZAPzNP8AReNMiuGUOFAmRIGMwSPLnFZvMt1m869L414HYvMLnwvsYIAcmANXE7ZxvXm7nUDprjJalSQrAz8WJ+W5+dM3uqdtLQQnxADU2k7wJzuefrSHVpcvtpCFzywAldgHJwQfMBE5iku39HMs+z3SBX/qrlzzSoezB0anKmVHciAD/wBNM9V4bbFywpQw7sHVjjzIWAJGxkk7zVOmsI94dNcZwtu2VS4bcnSdDsdAGRqDZ3yZncaI8JCMQr7gQ/3YAJBACo2qTvJiNoq2468+bmMbrvs06MxRlddDlFDQ8Agn4sGJGZnNIeHeIlWLsSdKgZ+ffc4FbR6wp1yJOom2U4EM0kkA7GB353isvxHqkYujCGRtAbGoqCRDkEyRvuas6O+ZKZs9Y7XEf4vhk+UAkMACFJGcAe/PNN2fGWLurHWGRliFYgKg1Ak5GJkUv4Ortbch7bLrAVHjzRldIY7zj0rJ6np9DtFsghiGBJBkztPESM/5qub0vRv0+nUOnVQVgsCF1BTBwTnPEVndV01lySjOjyAFMFATC6tthMxPFZt7xYC2iFfhDKqz/rMmTtvmlej659crPlgkKDIAMTPG4z61j59GHH8Pe2NJdCZ1HSW2YASQQD8vWgI4GBkTmCCYxnbHzq3VksCxcHOAWOsAzvIjtyKR0sIOsHgZjfBFS9WmD9QMwIMjJIAO/NZl1jjftninWL7E4474+W2DVEdThoxxHz/WrKsLuhHmDT7HOIz6D+1Hs3FadaAn/UCVZT6cflVOothCN85k7f7TVQTE01Ta2x/pufIsfzipWYTUq4PU9NYWYuKIDH4gRkCYwDIJB/zV7aJqDFZRT5Sqpg8SSJ5+ud61V8A6ifPkE7KVMDgmew9/eszr+lKIPJcAnzl5HGIx5pM84ry3q24lldvdUpBkIQrfjGo+YrMAATn9KwLzJrDAELJxjGfNAAEDNafRLEACcQe8wfNKnBwM+lJN0WoEBhvAB+IAHediTv8AOun+KSVAwRBJyZxjGknPz2rVutbe3aXyo4AOrSSCuoglyp32O3BzWZ0PSh3ZSTpEnBiO2SN8/lROstm2QoMqdpIMiMgwN5J4rs09YvWr0pRHIaBqDKZDLJyM9jsfzryt6+puOQIDFyucZJMN3j0rqoz21JAhJBk53mBG+OSO2YpSxeK6gCATmYz/ADalupknoUhcacH0JIiZO/NBdwAIM/LbMzRg6N5og/CQNjM+YZ3/AC2oa2wjDVlZEGJk8AjYzPf9KRFumvQSY1GfyMn9YqxuSjKwEnvJgn4M/M0fqLKOAqAK47QAe447EzQrFtiT5o41ATkbDGxoKP0yhQzEzp8q7d5Le/7UJE1AkHJ2XjMA+Yn0Fd6lNRwwJnMbDg7/AFn3qdPZ3CvuDgg5ztvj/FXYBqs6j/pcSPWT+9Ndbbw7QQLmkrGe0gzkEkmBTHTDSujDatTEYiT6HgbfzDFgF7BYwPuyFYR5ZBEaSMTOTH71N8hcXHA0SYVcwDgHA9syK1/BLwRVb7lnJhmMMTyADJgkQPrWIfECFcKx0tbKsSctlY9iM/Uj39H9m/G/vmdb58yoFRhK/i0jUFwTLLmJ74q4sanUdI9xGCKySBoA0kyMMFVmEYO+OdhWb4bb0a0cvqB51CCcGAK50vj1gG6t4a3QlbTHUQQQfM4DALBG65h8g1meMeIpbuFLS+SXJ+KG8qgAMSZUEHaPiPpWeudi16Lo/BkdzeEhkxqDQcgArERsxMnue1eQ6hlW7cuSpBclPkZkxgNnbvVvD/HGVxrYspJ1TuZ7TMZih9VaAQuHDamYx/pzAjGcegqyZ4qXq3xT3g/T/wBS5QuQZGloyNIYkTOZ8v0r1PjXQO1svdVbpRdQKko0geYkAQ31E+leS+zd/wC7d7qozKls4UH4mKQCYwfMTPAB7V6b7QeNgWEIDaby7mAy6lBGPmQexip1snglkeQ8S+62XXJn4vwj++Z/WkLLhDIY5xOMT3o9+6oAjUZmSTg5lY7ciKRiPigY3GT8xWUMgO5AkE7+38xVrvSsPKgickhpEEjufbikLV/Q0j8vWjnqdjPO21LLPTQt/p2RmE61BEMOxHb9qGNMFskRvGPoK6LksAWAzBPKj35rr31nMmDvG45Own508sqC+DgiRRF6dSCc+kRA+tMWQrTpUQce/OF2iq/cBZCiIHqQf7GOc7Vnf+Af9IP+b6j+1Sl2unuf5867Ws6XK+13dqqu1cqV5I7PMfa20qhSqgEzJAAJ9zXmfDvh+Y/8qlSvTx6c+vbo+Jxxq2+ZrN8Q/t/41KldJ7ROm2+VJ2vi+VSpVZEs8+6/rWqdv9y/oalSpVpY/E3/AECgWzn/AHH9DXalVQ+l+M/P96sdz/OKlSn2GPxL7H96f6TPS3JzlTnOYGalSokK9CPNcHEDHHPFJeDnzn5f+QrlSqjb8U+BfWZ9dt6xU/8Aqb+cV2pSelhAb1o9B8PzP6GpUq30j1XgjGHzxSv2uybU58z75/DZ/ufrUqVn6T7jznV/iHAJgdsmlVqVKkbVHPz/AFq9n4G9mrlSqL9Ht8v2rt3epUp9gnRn9V/UU0rHS2dtvTNSpXPr2zfYF3c1KlSg/9k=",
      name: "Nurturing Nature",
      desName: "Nainital",
      price: 10000,
      desc: "Discover the unmatched levels of enthusiasm with our latest and most popular complete package of tour of Manali",
      vrModel: {
        title: "Nainital",
        modelURL:
          "https://sketchfab.com/models/54ae07902bfa420e9c14a8f1d870e740/embed",
        modelAuthor: "shraddhakushwaha",
        modelTitle: "Nainital",
      },
    },
    {
      imgURL:
        "https://www.savaari.com/blog/wp-content/uploads/2021/12/1024px-Mumbai_Aug_2018_43397784544-1024x761.jpg",
      name: "Whatever it takes!",
      desName: "Mumbai",
      price: 50000,
      desc: "Perfect for group of friends, this package is a complete package of fun and adventure. You'll get to explore the hidden and unexplored places of Mukteshwar and including it, you'll get to experience the best of the best.",
      vrModel: {
        title: "Mumbai",
        modelURL:
          "https://sketchfab.com/models/59fe55328271479d82acb65310178d99/embed",
        modelTitle: "Mumbai",
        modelAuthor: "shraddhakushwaha",
      },
    },
    {
      imgURL:
        "https://static.toiimg.com/photo/93479583.cms",
      name: "Mathura - The Dream",
      desName: "Mathura",
      price: 20000,
      desc: "This package is a complete package of bhakti and devotion. You'll be experiencing Shri Krishn ",
      vrModel: {
        title: "Mathura",
        modelURL:
          "https://sketchfab.com/models/d182f51001644521b66a8b013892c6fc/embed",
        modelTitle: "Mathura",
        modelAuthor: "shraddhakushwaha",
      },
    },
    {
      imgURL: "https://mygate.com/wp-content/uploads/2023/08/159.jpg",
      name: "The Grand Dubai Tour",
      desName: "Goa",
      price: 200000,
      desc: "Experience the vibrant allure of Dubai with our Great Dubai Tour package. Dive into the mesmerizing blend of modernity and tradition as you explore iconic landmarks like the Burj Khalifa, Palm Jumeirah, and the Dubai Mall.",
      vrModel: {
        title: "Goa",
        modelAuthor: "shraddhakushwaha",
        modelURL:
          "https://sketchfab.com/models/04847e60f32449c3b8a04431c555d175/embed",
        modelTitle: "Goa",
      },
    },
  ]);

  const transfer = (bookingProps) => {
    navigate("/bookingpage", { state: bookingProps });
  };
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] bg-[#141627] overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <main className="w-[55vw] h-full overflow-y-scroll">
        <nav>
          <form
            action=""
            className="h-10vh mt-4 flex ml-8 align-middle justify-between "
          >
            <div>
              <FaSearch className="text-[#a0a3bd] text-2xl mt-[1.35em] ml-[1.25em] absolute" />
              <input
                className="p-4 my-4 w-[30vw] search_input rounded-lg bg-[rgb(223,227,255)] text-center"
                type="text"
                placeholder="Search for your favourite destination"
              />
              <button className="text-[#141627] search_btn rounded-lg bg-[#D1F366] w-fit h-fit mt-[1em] px-7 py-4">
                Search
              </button>
            </div>
            <IoMdNotificationsOutline className="text-[#a0a3bd] p-2 text-xl mt-[1.30em] h-9 w-9 bg-[#1C1F37] rounded-full" />
          </form>
        </nav>

        <div className="flex flex-col ml-8 mt-6">
          <div className="flex flex-col">
            <h1 className="text-[#D0D4E7] text-[2.5em]">Hello, Rishabh</h1>
            <p className="text-[#626577] text-xl">Welcome back and explore!</p>
          </div>
          <div id="popular_destinations flex flex-col">
            <div className="w-[50vw] flex flex-row justify-between">
              <h1 className="text-[#D0D4E7] mt-8 text-[1.7em]">
                Popular Destinations
              </h1>
              <button className="text-[#D1F366] text-sm mt-8 hover:underline">
                View All
              </button>
            </div>
            <div className="flex flex-row mt-6 flex-wrap ">
              {packageData.map((packageProps, index) => (
                <Link key={index} to="/bookingpage" state={packageProps}>
                  <DestinationCard
                    key={index}
                    desName={packageProps.desName}
                    imgURL={packageProps.imgURL}
                    name={packageProps.name}
                    price={packageProps.price}
                    desc={packageProps.desc}
                    vrModel={packageProps.vrModel}
                    transfer={transfer}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="flex flex-col w-[20vw] mt-8 ml-10 ">
        <div className="p-2">
          <ProfileCard
            name={"Rishabh"}
            imgURL={"https://rishabhguptajs.vercel.app/images/profile.jpg"}
            level={"Pro"}
          />
        </div>
        <div className="text-white m-4">
          <div className="flex flex-col">
            <h1 className="text-[#D0D4E7] text-2xl">Predict your next trip!</h1>
            <a href="http://127.0.0.1:5000" target="_blank">
              <button className="bg-[#1C1F37] p-2 m-2 my-4 text-sm rounded-sm font-semibold text-white hover:shadow-[1em] hover:translate-y-[-2px] transition-all hover:rounded-lg hover:bg-[#D1F366] hover:text-[#141627]">
                Predict Now!
              </button>
            </a>
          </div>
          <div>
            <h1>Plan your trip here!</h1>
            <a href="https://397cead2868c20ac15.gradio.live" target="_blank">
              <button className="bg-[#1C1F37] p-2 m-2 my-4 text-sm rounded-sm font-semibold text-white hover:shadow-[1em] hover:translate-y-[-2px] transition-all hover:rounded-lg hover:bg-[#D1F366] hover:text-[#141627]">
                Plan Now!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
