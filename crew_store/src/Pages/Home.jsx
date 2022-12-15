import { Link } from 'react-router-dom';
import './home.css';



export default function Home(){
    const create=[{
        im:"https://www.jcrew.com/s7-img-facade/BD613_RD6052_m?wid=416",
        title:"Shop Women's Sweaters"
    },
    {
        im:"https://www.jcrew.com/s7-img-facade/BN161_YD2172_m?wid=416",
        title:"Shop Women's Shirts & Tops"
    },
    {
        im:"https://www.jcrew.com/s7-img-facade/BM312_PT3361_m?wid=416",
        title:"Shop Women's T-shirts & Tank Tops"
    },
    {
        im:"https://www.jcrew.com/s7-img-facade/BM874_YD2455_m?wid=416",
        title:"Shop Women's Dresses & Jumpsuits"
    },
    {
        im:"https://www.jcrew.com/s7-img-facade/BM557_YD2455_m?wid=416",
        title:"Shop Women's Blazers"
    },
    {
        im:"https://www.jcrew.com/s7-img-facade/BM751_BK0001_m?wid=416",
        title:"Shop Women's Pants"
    }
    ]

    const data1=[
        {
            image:"https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_w_img12.jpg",
            h5:"Creative Spirits Series",
            h1:"Marie Marot X J.Crew",
            p:"Shop our collab"
        },
        {
            image:"https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img7.jpg",
            h5:"That fall feeling",
            h1:"Layer love with Marjon Carlos",
            p:"Shop our story"
        },
        {
            image:"https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img8.jpg",
            h5:"Heritage made modern",
            h1:"A Cashmere Remix with Lucy Williams",
            p:"Shop our story"
        }
    ]


    const data2=[
        {
            image:"https://www.jcrew.com/brand_creative/homepage2022/14-Dec3/gifcyb_w_agnetha.jpg",
            h1:"Most wanted: limited-edition Barbour® X J.Crew Agnetha jacket",
            p:"Get a closer look"
        },
        {
            image:"https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img9.jpg",
            h1:"The edit: tartan time",
            p:"Shop the festive roundup"
        },
        {
            image:"https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_w_img10.jpg",
            h1:"Olympia’s picks",
            p:"Shop her December edit"
        },
        {
            image:"https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img11.jpg",
            h1:"Design Try-ons: the Holiday Collection",
            p:"Shop the video"
        }

    ]
    return(
        <>
        <div className="container">
            <div className="inner">
                <h1>THE CREW STORE GIFT GUIDE </h1>
                <h5>Great Holiday Presents are part of our heritage.Here's our 2022 take...</h5>
                <div className='grid1'>
                    <div>
                        <Link to={"/Men"}><p>shop for Men</p></Link>
                    </div>
                    <div>
                    <Link to={"/Women"}><p>shop women </p></Link>
                    </div>
                    <div>
                    <Link to={"/Women"}><p>shop for girl</p></Link>
                    </div>
                    <div>
                    <Link to={"/Men"}><p>shop for boy</p></Link>
                    </div>
                    <div>
                    <Link to={"/"}><p>shop for Home</p></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='grid2'>
            <div className='container21'>
                <div className='inner2'>
                    <h1>Going somewhere snowy?</h1>
                    <p>Visit the SKI shop</p>
                </div>
            </div>
            <div className='container22'>
                <div className='inner2'>
                    <h1>Facts:Sweaters make great gifts</h1>
                    <p>One from them, one for you</p>
                </div>
            </div>
            <div className='container23'>
                <div className='inner2'>
                    <h1>Not-So-Snooze-worthy pj's</h1>
                    <p>Shop our holiday prints</p>
                    <p>Shop pj's for the whole family</p>
                </div>
            </div>
            <div className='container24' >
                <div className='inner2'>
                    <h1>Our warmest coats</h1>
                    <p>Bundle up</p>
                </div>
            </div>
        </div>
        <h1>More you need to see</h1>
        <div className='grid3'>
                {create.map((ele)=>(
                    <div className='img'>
                        <Link to={"/Men"}>
                    <img src={ele.im} alt="img" />
                    <p>{ele.title}</p>
                    </Link>
                    </div>
                ))} 
        </div>
        <div className='main'>
            <div className='first'>
                <h1>The Crew Store Collective</h1>
            </div>
            <div className='main_grid'>
                {data1.map((ele)=>(
                    <div className='img'>
                        <Link to={"/Men"}>
                    <img src={ele.image} alt="img" />
                    <h5>{ele.h5}</h5>
                    <h1>{ele.h1}</h1>
                    <p>{ele.p}</p>
                    </Link>
                    </div>
                ))} 
            </div>
            <div className='main_grid1'>
                {data2.map((ele)=>(
                    <div className='img'>
                        <Link to={"/Men"}>
                    <img src={ele.image} alt="img" />
                    <h1>{ele.h1}</h1>
                    <p>{ele.p}</p>
                    </Link>
                    </div>
                ))} 
            </div>
        </div>
        </>
    )
}