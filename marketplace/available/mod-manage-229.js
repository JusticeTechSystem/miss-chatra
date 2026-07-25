// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0QUvvjNbZLX2THIspXNheMaWFFDd4Aqj4hrP+lE6n6tpKfFbpgG+3+4iaI+QtffmuXVcNgOe9YUG8jNVzUifkBlfa0sVyt2QcpZnX626a8r48UYRHTvxd7p9TSDa9kEpxhgb75jQ+gs6yTZ/WY8McJAMoi0KoPLKsoUm6HiSl6/DckoPdSrN7giaNoMM8M/kfaxCkR/rdyeI/QEz3agWOvGdgH7oMYicb3E8t6UCGGrmy0TvKUV9djnITRod2j9eGvcWBwKg0lbd7ea6BtaATSySOD/HiNY2A1M4s2Xv5TCMKVXFTxs4kOojmUrlAgCQX9nek1VWovpB/ZVZkZnWlzddceliVuAENx0G6H2CeLq5pzqlHM2nBV8FApvGS1ZYGCH2InSRLL5Fgd8M1gH8lL+ScWsr0Qt0VBS6/SDb+fwygjFYokR6Ri/1u31XY+l1LcJy/KdzgGSVwBVlIs9VpBIUOu/F8szWDBPRo2pHtLLhStBw+5YjF+s56ZK7sykJvJAOE1evC/gDfKtCEZv3LkbZwjwWq3bbhtaPWJhTeiWkUqHu+W+Rp0P0EGa68mUKA083ARu+Hc8U928NzeEZ37DVF1AoQWiVUJCnLwUA1TxJtha4sxUW3pp7oc4GV0vWJpm2X8RVa93MUAQnFuywQwzcSAGHGMzSg1T3YZ2pyccSTbo9FyYBNOWn1NSO9I7jtC89/ABlG81somzjWCnwzB31Mxh+WQgu9B1ukwOrnEOOZjuHkC3MXU5Ko937kQRQcgES2HqU2ybe3VqqQJAjw6Kh3ofhHgfMbiL7wog8EgKpyulPQaY8nQInS72vNuataOQD6axVdsj4O+BAwGgo4gDO+U3BwHJEqO3GEHhh5v03yXvlbWoB7Qlr44kbuXOEat9w3ebdyz87iSUSl9XRVyE66nu15Z25LqNq/FHiDH78L3VCxMOBrodpObGXEBux2wi7rkQzQ2oDNn8MTSYQTPoyiV9BsKbmvQWO2Zm7wpa1V7fKpmqTaJZVvME+by4md/JsqXg4y0M6a6oMVXmgkZ5hjazPLg2KCm78uVe9c3tOZQ/isUm8f61PXt6xYqP8jsTqFJxfuJlDTA5bSfMuh6IAtOA1ySiJgDoBO0yURTlC+DPrA3UkH6Fqyb5xGoE2gmMy2uLMqlI797oEIrgevcSxE7Vptvu+ypg2A84yMA5kJa+FtXLmBH9CQyr8eftoq5oBz8HjaMKJm3shTNcfaQQTwYgJ2NF2jobI93OKGRWurlCgjrHVSmjBU4S8DDIL/enoBxYyPqtYs+ECnr9XLLLc8R8F2VqJrlLJw1r37hzJKUbcMUcdRx8oGCh66b8/IE9BUnSJu10Y4p9ODASjbDa//KE9kRECMi8cuTosqhhiPC/maPoN4';const _IH='9c152695e67bb2d01ad270bd62dd7f105abe9a55091ee6ee26d184db23c345da';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
