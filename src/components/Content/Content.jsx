import React from 'react'
import {
    Button,
    Container,
    ContainerImage,
    Div,
    Img,
    Input,
    Select,
    Texto1,
    Texto2
} from '../styles/styles'
import { useState } from 'react'
import html2canvas from 'html2canvas'

function Content() {
    const [image, setImage] = useState("")
    const [line1, setLine1] = useState("");
    const [line2, setLine2] = useState("");
    const onChangeImage = (e) => {
        const img = e.target.value;
        setImage(img);
    }

    const onChange1 = (e) => {
        const valor = e.target.value;
        setLine1(valor)
    }
    const onChange2 = (e) => {
        const valor = e.target.value;
        setLine2(valor)
    }

    const onClickExport = () => {
        alert("Funciona")
        html2canvas(document.querySelector("#capture")).then(canvas => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement("a");
            link.download = "meme.png";
            link.href = img;
            link.click();
        });
    }
    return (
        <>
            <Container>
                <Select onChange={onChangeImage} defaultValue="" image={image}>
                    <option value="" disabled hidden>Select a meme</option>
                    <option value="fire">Casa en llamas</option>
                    <option value="futurama">Futurama</option>
                    <option value="history">History Channel</option>
                    <option value="matrix">Matrix</option>
                    <option value="philosoraptor">Philosoraptor</option>
                    <option value="smart">Smart Guy</option>
                </Select>
                <Input
                    type='text'
                    placeholder='First phrase'
                    onChange={onChange1}
                />
                <Input
                    type='text'
                    placeholder='Second phrase'
                    onChange={onChange2}
                />
            </Container>
            {
                image != "" ? <>
                    <ContainerImage>
                        <Div id='capture'>
                            {line1 != "" ?
                                <Texto1>
                                    {line1}
                                </Texto1>
                                :
                                <></>
                            }
                            <Img src={`/assets/img/${image}.jpg`} alt="" />
                            {line2 != "" ?
                                <Texto2>
                                    {line2}
                                </Texto2>
                                :
                                <></>
                            }
                        </Div>
                        <Div>
                            <Button onClick={onClickExport}>Export</Button>
                        </Div>
                    </ContainerImage>
                </> : <></>
            }
        </>
    )
}

export default Content