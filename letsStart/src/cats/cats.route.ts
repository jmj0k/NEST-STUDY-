import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllCat,
  readCat,
  updateCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

//* READ 고양이 전체 데이터 조회 (고양이 == 유저로 치환 가능)
router.get("/cats", readAllCat);
//* READ 특정 고양이에 대한 데이터 조회 (고양이 == 유저로 치환 가능)
// : <=를 붙이면 변수처럼 사용 가능
router.get("/cats/:id", readCat);
//* CREATE 새로운 고양이 추가 (유저 추가 [sign-up]) api
router.post("/cats", createCat);
//* UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", updateCat);
//* UPDATE 고양이 데이터 업데이트 (부분 업데이트) -> PATCH
router.patch("/cats/:id", updatePartialCat);
//* DELETE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", deleteCat);

export default router;
