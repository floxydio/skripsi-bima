import { Express } from 'express';
import { BahanBakuCabangController } from '../controllers/cabang/bahan_baku.controller';
import { BeliCabangController } from '../controllers/cabang/beli_cabang.controller';
import { BusukCabangController } from '../controllers/cabang/busuk_cabang.controller';
import { MakananController } from '../controllers/cabang/makanan.controller';
import { MutasiCabangController } from '../controllers/cabang/mutasi.controller';
import { AuthController } from '../controllers/auth/auth.controller';
import { BbakuGudangController } from '../controllers/gudang/bbaku_gudang.controller';
import { DataKirimGudangController } from '../controllers/gudang/datakirim_gudang.controller';
import { KodeSupplierGudangController } from '../controllers/gudang/kd_supplier_gudang.controller';
import { SoCabangController } from '../controllers/cabang/so_cabang.controller';


export default function Router(app: Express) {

    // Define Controller
    const bbCabangController = new BahanBakuCabangController()
    const beliCabangController = new BeliCabangController()
    const busukCabangController = new BusukCabangController()
    const makananCabangController = new MakananController()
    const mutasiCabangController = new MutasiCabangController()
    const authController = new AuthController()
    const bbakuGudangController = new BbakuGudangController()
    const dataKirimGudangController = new DataKirimGudangController()
    const kdSupplierGudangController = new KodeSupplierGudangController()
    const soCabangController = new SoCabangController()


    // Auth
    app.post("/v1/auth/login", authController.login)
    app.post("/v1/auth/register", authController.register)


    // Cabang ===

    // Bahan Baku ---


    app.get("/v1/cabang/bahan-baku", bbCabangController.getBahanBaku)
    app.post("/v1/cabang/bahan-baku", bbCabangController.createBahanBaku)
    app.put("/v1/cabang/bahan-baku/:id", bbCabangController.updateBahanBaku)
    app.delete("/v1/cabang/bahan-baku/:id", bbCabangController.deleteBahanBaku)

    // Beli Cabang ---

    app.get("/v1/cabang/beli-cabang", beliCabangController.getBeliCabang)
    app.post("/v1/cabang/beli-cabang", beliCabangController.createBeliCabang)
    app.put("/v1/cabang/beli-cabang/:id", beliCabangController.updateBeliCabang)
    app.delete("/v1/cabang/beli-cabang/:id", beliCabangController.deleteBeliCabang)

    // Busuk Cabang ---

    app.get("/v1/cabang/busuk-cabang", busukCabangController.getBusukCabang)
    app.post("/v1/cabang/busuk-cabang", busukCabangController.createBusukCabang)
    app.put("/v1/cabang/busuk-cabang/:id", busukCabangController.updateBusukCabang)
    app.delete("/v1/cabang/busuk-cabang/:id", busukCabangController.deleteBusukCabang)

    //  SO Cabang

    app.get("/v1/cabang/so-cabang", soCabangController.getSoCabang)
    app.post("/v1/cabang/so-cabang", soCabangController.createSoCabang)
    app.put("/v1/cabang/so-cabang/:id", soCabangController.updateSoCabang)
    app.delete("/v1/cabang/so-cabang/:id", soCabangController.deleteSoCabang)

    // Makanan Cabang ---

    app.get("/v1/cabang/makanan", makananCabangController.getMakanan)
    app.post("/v1/cabang/makanan", makananCabangController.createMakanan)
    app.put("/v1/cabang/makanan/:id", makananCabangController.updateMakanan)
    app.delete("/v1/cabang/makanan/:id", makananCabangController.deleteMakanan)

    // Mutasi Cabang ---

    app.get("/v1/cabang/mutasi-cabang", mutasiCabangController.getMutasiCabang)
    app.post("/v1/cabang/mutasi-cabang", mutasiCabangController.createMutasiCabang)
    app.put("/v1/cabang/mutasi-cabang/:id", mutasiCabangController.updateMutasiCabang)
    app.delete("/v1/cabang/mutasi-cabang/:id", mutasiCabangController.deleteMutasiCabang)


    //  Gudang

    app.get("/v1/gudang/bahan-baku", bbakuGudangController.getBBaku)
    app.post("/v1/gudang/bahan-baku", bbakuGudangController.createBBaku)
    app.put("/v1/gudang/bahan-baku/:id", bbakuGudangController.updateBBaku)


    // Data Kirim - Gudang


    app.get("/v1/gudang/data-kirim", dataKirimGudangController.getDataKirim)
    app.post("/v1/gudang/data-kirim", dataKirimGudangController.createDataKirim)
    app.put("/v1/gudang/data-kirim/:id", dataKirimGudangController.updateDataKirim)

    // Kode Supplier - Gudang

    app.get("/v1/gudang/kode-supplier", kdSupplierGudangController.getKdSupplier)
    app.post("/v1/gudang/kode-supplier", kdSupplierGudangController.createKdSupplier)
    app.put("/v1/gudang/kode-supplier/:id", kdSupplierGudangController.updateKdSupplier)




}