// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EHUcvfmMmL5ZhH0aaFv01ftWrFFjnofnW7GScsX9FHAnElKWeg/fTlwyDncxzcUFMEszIr3E4hoVJeVypS2T+vCBCDraszRQ2+knWnXaGRY59tTh6LDIlEGimseKHX5lIH3iIywzUrDUH2HoeOhv1wCLAjI/h8ypzj/GeKXb3aFaVouXJuzJrQCQVMSVhBT3Hfgv1M1WODU03LVLrnLMNmX76FRLnMzRCwev4zks8a2dXZc+6EnaSrXSorKWwlCeMhllOTCzHBQh1K90iWwZ8uQZGugJncGrADa2qtyTqi7gINxF27kI+HGalVoW+PXLo0QcaE8ypfYglKWEMTid2AMdBKsGHYqKXNcb0yx4cPnr4+iMcMl8RBe6bVkEESWduu2hUX2z+sti49ceSwtoHTM3xznO6TEDUEdAczJsMJEW6WkDKvfIjH49xZ+0PFsoN6nrRRSZHmhLXyxfayI5u2zvMaWWYoRyIHckaVfi4qO5pM1DXlix1R6LYmFSZ7I/Hf+zOkU4sGP1szy0VEM31Wf/6BKy0kQ0ySvJj0JyI9yaoPH1Bq1EEnIeRzr2vDB/MNYdRBw0oYESknu2lobvtZPTxif6AO/rIUPJ8OQus0n0RJNeJL3mPG+kA+728xp00HN+XbEQ65DWfCumoms3KyiA0TZ8gzS6QmmYZC/TFs1zWSNFW0b+uUEoLrGtJrwOpnMIDQdUGZnZpJfHR4tkpI6coqW0hYfKKirAW0lb2glx4QFKsxFMwQkKVqQZrB1YH2zmbXk23DM9yI0vUSGxSSj7F+svWjdUMD/IeiHaJu7OrN3uiAY9FhHZHsQe9YH7/Q/LjiKmQHRz/VnRompytVaibS4d76klsWz2+u0wkenBO4lGFK2nrKdPlZ8oL2+HsCTG7nO8dMhFeD4d2IlfNBGdxwZ8LnpETaYv9jHQ7HIW+oHPi707arhSnMzwLuf2RkKOwh9fjXh3e9WfeUGIX/buQcDsQRltv0RBQXoVSZDsiho497lcbMMeK45ZHt0MJ/Sf1yUlfPOJmTQYk6SO57HLZlA8z7QjXX13cQynnyqQyZ/SZUkgBXWhwM8THK0wU8ZTy1+csxMJygvRtTFfheYF+ORjjWuO/s78xgtqobSqPFW2xFZyxxsOlP4yOuMlZcNsy4yDAe/0f0VHnqzQrrWvGG23YOvBhzT9gE7xTdo34CpYx1YfO+v3+px41VFgtI6+j1AORNCDfBSTou1guzqO3DWB';const _IH='feb6ac82db9caf2faa9adfa3855966d3fe6b9018f6dcc8898848f911c99f1eb0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
