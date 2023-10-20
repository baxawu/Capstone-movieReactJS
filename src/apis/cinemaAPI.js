import fetcher from "./fetcher";

export async function getMovieShowtimes(movieId) {
    try {
        const response = await fetcher.get("/QuanLyRap/LayThongTinLichChieuPhim", {
            params: {
                MaPhim: movieId,
            }
        });
        return response.data.content
    } catch (error) {
        throw error.response.data.content
    }
};

export async function getCinemaSystems() {
    try {
        const response = await fetcher.get("QuanLyRap/LayThongTinHeThongRap")
        return response.data.content;
    } catch (error) {
        throw error.response.data.content;
    }
}

export async function getCinemaDetails(cinemasId) {
    try {
        const response = await fetcher.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
            params: {
                maHeThongRap: cinemasId
            }
        });
        return response.data.content;

    } catch (error) {
        throw error.response.data.content;
    }
}

export async function getShowtimes(cinemasId) {
    try {
        const response = await fetcher.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
            params: {
                maHeThongRap: cinemasId
            }
        });
        return response.data.content;
    } catch (error) {
        throw error.response.data.content;
    }
}