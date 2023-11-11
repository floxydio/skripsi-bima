import { Express } from 'express';
import { BahanBakuCabangController } from '../controllers/cabang/bahan_baku.controller';
import { BeliCabangController } from '../controllers/cabang/beli_cabang.controller';
import { BusukCabangController } from '../controllers/cabang/busuk_cabang.controller';


export default function Router(app: Express) {

    // Define Controller
    const bbCabangController = new BahanBakuCabangController()
    const beliCabangController = new BeliCabangController()
    const busukCabangController = new BusukCabangController()


    // Cabang
    app.get("/v1/cabang/bahan-baku", bbCabangController.getBahanBaku)
    app.post("/v1/cabang/bahan-baku", bbCabangController.createBahanBaku)
    app.put("/v1/cabang/bahan-baku/:id", bbCabangController.updateBahanBaku)
    app.delete("/v1/cabang/bahan-baku/:id", bbCabangController.deleteBahanBaku)

    // Bahan Baku ---

    app.get("/v1/cabang/beli-cabang", beliCabangController.getBeliCabang)
    app.post("/v1/cabang/beli-cabang", beliCabangController.createBeliCabang)
    app.put("/v1/cabang/beli-cabang/:id", beliCabangController.updateBeliCabang)
    app.delete("/v1/cabang/beli-cabang/:id", beliCabangController.deleteBeliCabang)

    // Beli Cabang ---

    app.get("/v1/cabang/busuk-cabang", busukCabangController.getBusukCabang)
    app.post("/v1/cabang/busuk-cabang", busukCabangController.createBusukCabang)
    app.put("/v1/cabang/busuk-cabang/:id", busukCabangController.updateBusukCabang)
    app.delete("/v1/cabang/busuk-cabang/:id", busukCabangController.deleteBusukCabang)




}