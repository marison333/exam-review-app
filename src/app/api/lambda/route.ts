export type HomeProps = {
    buttonLabel: string;
    buttonUrl: string;
    imageAlt: string;
    imageUrl: string;
    title: string;
    subTitle: string;
};

export async function GET() {
    const response = await fetch('https://47c69rsiqh.execute-api.eu-central-1.amazonaws.com/marison_lambda_function');
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const res = await response.json();
    
    const homeData: HomeProps = {
        buttonLabel: res.buttonLabel,
        buttonUrl: res.buttonUrl,
        imageAlt: res.imageAlt,
        imageUrl: res.imageUrl,
        title: res.title,
        subTitle: res.subTitle
    };

    return new Response(JSON.stringify(homeData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
