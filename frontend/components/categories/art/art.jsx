import React from 'react';
import { Link } from 'react-router-dom';

class Art extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if (window.store.getState().session.currentUser !== null) {
            this.props.requestMyProjects(window.store.getState().session.currentUser.id)
        }
    }

    componentDidUpdate() {
    }

    render() {

        return <section className="main-content">
            <div className="categories">
                <nav className="flex justify-center">
                </nav>
            </div>

            <div style={{display:"flex"}}>
                <div style={{ margin: "20px auto" }}>
                    <h2 style={{fontWeight: "lighter"}}>Arts</h2>
                    <h3 style={{ fontWeight: "lighter", color: "darkgray"}}>Discover the artists and organizations using Kickstarter to realize ambitious projects in visual art and performance.</h3>
                </div>
            </div>

            <div className="flex">
                <a href="https://project-kindler.herokuapp.com/?#/projects/2/6" className="three-five" style={{ borderRight: "1px solid lightgray", paddingRight: 0 }}>
                    <div style={{ marginBottom: 20, color: "#656969" }}>FEATURED PROJECT</div>
                    <img style={{ maxHeight: "85%", maxWidth: "85%" }} src="https://miro.medium.com/max/1072/1*0MFdD6_5keqFvIiEX4nrWw.jpeg"></img>
                    <div style={{ width: "85%", backgroundColor: "#037362", minHeight: 15 }}></div>
                    <h3>Jin's Bubble Tea</h3>
                    <p>Bubble Tea in the heart of Brooklyn, served cold and fresh.</p>
                </a>

                <section className="two-five">
                    <div style={{ marginBottom: 20, color: "#656969" }}>RECOMMENDED FOR YOU</div>
                    <a href="https://project-kindler.herokuapp.com/?#/projects/2/4" style={{ minHeight: 70, borderBottom: "1px solid lightgray" }} className="flex mb-20">
                        <img src="https://target.scene7.com/is/image/Target/GUEST_c21c029c-7fcf-489e-9e85-feedca15982e?wid=488&hei=488&fmt=pjpeg" style={{ maxWidth: "30%" }}></img>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p style={{ marginBottom: 0, marginLeft: 10 }}>JinPhone 11</p>
                            <p style={{ marginBottom: 0, marginLeft: 10, marginTop: 0, marginTop: 5, color: "#037362", fontWeight: "bold" }}>0% funded</p>
                            <p style={{ marginTop: 0, marginLeft: 10, marginTop: 5, color: "#656969", fontWeight: "lighter" }}>By Jin</p>
                        </div>
                    </a>
                    <a href="https://project-kindler.herokuapp.com/?#/projects/2/5" style={{ minHeight: 70, borderBottom: "1px solid lightgray" }} className="flex mb-20">
                        <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/74E8/production/_112482992__111703877_gettyimages-1128870980.jpg" style={{ maxWidth: "30%", marginBottom: 20 }}></img>
                        <div>
                            <p style={{ marginBottom: 0, marginLeft: 10 }}>The Jin York Times</p>
                            <p style={{ marginBottom: 0, marginLeft: 10, marginTop: 0, marginTop: 5, color: "#037362", fontWeight: "bold" }}>0% funded</p>
                            <p style={{ marginTop: 0, marginLeft: 10, marginTop: 5, color: "#656969", fontWeight: "lighter" }}>By Jin</p>
                        </div>
                    </a>
                    <a href="https://project-kindler.herokuapp.com/?#/projects/1/3" style={{ minHeight: 70 }} className="flex mb-20">
                        <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/15/0/FNK_Korean-Grilled-Beef-Bulgogi-H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1557961246095.jpeg" style={{ maxWidth: "30%" }}></img>
                        <div>
                            <p style={{ marginBottom: 0, marginLeft: 10 }}>Lauren's Greatest Korean Recipes!</p>
                            <p style={{ marginBottom: 0, marginLeft: 10, marginTop: 5, color: "#037362", fontWeight: "bold" }}>0% funded</p>
                            <p style={{ marginTop: 0, marginLeft: 10, marginTop: 5, color: "#656969", fontWeight: "lighter" }}>By Lauren</p>
                        </div>
                    </a>
                </section>
            </div>
            <a href="https://project-kindler.herokuapp.com/?#/projects/1/1" style={{ display: "flex", justifyContent: "center", marginTop: 20, borderTop: "1px solid lightgray", paddingTop: 40 }}>
                <img style={{ maxHeight: 300, marginRight: 10 }} src="https://action.scholastic.com/content/dam/classroom-magazines/action/issues/2019-20/040120/superman-becomes-a-star-superheroes-take-over-the-world/07-ACT-040120-p26-PT-Superman-TN.jpg"></img>
                <div style={{ display: "flex", flexDirection: "column", marginLeft: 10, paddingLeft: 10, borderLeft: "10px solid rgb(3, 115, 98)" }}>
                    <p style={{ fontWeight: "bold" }}>Superman Returns!</p>
                    <p>Superman Returns in this action packed thriller! 슈퍼맨이 돌아왔다!</p>
                </div>
            </a>
        </section>
    }
}
export default Art;