import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router();

//* READ 고양이 전체 데이터 조회 (고양이 == 유저로 치환 가능)
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("db connect error");
    // 보내줄 때 status도 보내줄 수 있음
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 특정 고양이에 대한 데이터 조회 (고양이 == 유저로 치환 가능)
// : <=를 붙이면 변수처럼 사용 가능
router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    // throw new Error("db connect error");
    // 보내줄 때 status도 보내줄 수 있음
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (err: any) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

//* CREATE 새로운 고양이 추가 (유저 추가 [sign-up]) api
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data); // Create
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (err: any) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

//* UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

//* UPDATE 고양이 데이터 업데이트 (부분 업데이트) -> PATCH
router.patch("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

//* DELETE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (err: any) {
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
});

export default router;
