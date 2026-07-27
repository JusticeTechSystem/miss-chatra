// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNs/MOD+Fg4s2iz9JkHfXzHdVZTx4yMhJdfi67TYo2ih99K/aIVmvItj+6/Y3nVCrecqHrL97ItxTal6NzTlX9GCsSHGIxQvvT1IPKuV+9EF/AFOA7gxtnAYNh3BtCXOXCIkbaNS5iF0oGIF/kGLApEtxNORe7lJH1t2/6R7cVPUPNPq+r73WSNjpTaf8efwVsGi+vdcQ+OQ+BzRnWDiN0na7T5OKqGYRA1+Q0lCUFE9ACmpDdoULVFiZAomWAKNmAzYRfmDqH5omvMT0eXPvZ5r7CRmTstbCNNYAPLQcOgAPAWsV34bDkZsXgFPf9HGnb9Vp8mUmMrdsuihjwqImya1Qq8KXYUzwkG6ABlyS5yq932TWTXQGpHhG6ZyAVXUQ75Pv185go6I0GYL2B3j3aZ9O/qveteqGf9GnhaTaPoJD/Mi5ck1D0LtFG/wX4KbVVN/V1r5f2ROirSfxldhQafAHsWh0Cs8PJgXTKbJXx0bSfaIzNJ3wLdCfIjkc1xMuMb72Qu6cc8rVrZ4aYX18KjUXeuh7L90gRxF+GlYz2p7WM8Kc0U358NHEcxM69vK3AVgaPD3SB/d2E6PJqp0+umEYleaZweCwKi8+YBe2Tr6rkedqH3YN/XYdFOxruIdLPPDdMR8fY8CIDPWwmJeLA7zPdNTFpt3srYdD0C0UNvNniwXiAQk2prj1GJmoKMgiDzfZxzfEJ2oedI9jalutf3vWkhROJN5TSewhnT3kT+4DVrJblXIN258gYurE4upUri2s0iM1K6Xlf4JREy3DML5s0SivOPV+1anvI4bNN/A5N7qEJf/vmRvb/ZEfM1klr6JtQgaYDDhfF5e9skCsZSEgJpV1tTwGvrFA4Tk0qAo66yWch8lmb/CDqQp16td87nndlnbdYoenVyZl8aUnFPLCxHwPbOFJd7b2Z5LUwqjo0qe3vsPrT8FSoPlwN7HoxGnDORXpo1IsdxOuJ96vUV7maU6i+ati5zlw/edkRRJl9wSa/OEh8iC8SwQUDa/j2jB4v';const _IH='78c906ca0c472ff41616cc93e9260d7f06d0b59d55d72499e13ed8384668cced';let _src;

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
