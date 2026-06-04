// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7jnfw24gOSmexWfeDrFBFEbde3MLC6wrEBJrUwVZagHi4H2eDghnJJ+3mITis65aGpjmeG7XFeHWU7kMpt74KBf/cEfG6aE3er+ITSVFAf8aYTCr4qHr+6lqzZaGLnMNnaMBCzZ24Mzac/2b6RvXUb1mBf8bhL2bJr/SCSoNZ9NzZUloir3pHbBObCVrw5JbI58hMSY97amiRxleixPiYho0DEbDVj7Jq64swSrcRhu6vtJaAlIAXPgSSc04NOuFkrtzsFysp5ML1obQtxx90e4eEXKZzcK4h6jSpgchxas7qkoheWyXhTv79COiwFD6qIzZsMaoaEmAJEuYGRaNYgfwqFcU1Ou6zAMUrG4wh1GRQzfn5iw1BJ1QwUsjZ/qmHlFtjflZiwwKK6bhyfvQtdUJpXVTtFTiV79MuaGoooi9xXlY/UUid4BcAlBpqL4QEJ8smbm8BwbmkML+dxqAVnXcrNWWy9U+Q1S5XLZ9zRirFLakGYFaYwax6p3XrSUS4DoQ97avaSe2HUVfuupm9BYehuWHFvs3r5X/UXi5d0egrICaAAA/6exlkE0YkG1sZEBo3XEli1i1Og28rN3a67/jrcC/UXYjbJRPl7MZhVuE7wDRdiVcsc9kb6rjvmhfAntESIUG9lYSlg6xtPkJ/LXQSjvtua+1wzy18PMkJa4pw5ARv3bnU3mNTUFp4IH3UOaEvI+SznPRZEU1dalSB3vcSrkMZLdFa7AZy3V0PDYp9ZpD/RmTWYhFWx++cjkWHyR1e8PAPqmyBfTlndVw29m5+E68FrL1Huwe5PMNYn0hX+DkSeopP40k16gapbChrFf6mTxiklBF1lbmksyBcQgypkiraCn8u+l18eIHgS1buez5J1PXH8EeUFY4Ljq9zBwElr5g48Ad//R5O3WsIAqZNhIOlrUtauqPDnW834LO2Y6eQUhA/ptcUdvbNh0c0Ij4SpiNo6S2ZQyz8zX0zlCujelYWSb8UdB3nqccs1/hH3PjFCjjcWnWQgbT6OVK/FuIJMtij4FBWIODlpb6r8JeNuQlKq8BcuELs4P81WRZlJzEzGJH8hMUOczrNxRQtwI/Livb4a+oeoJkxyqLGiNtnHl+vLi+dwr4+R6gSPIirmRYt9f8TbHvZE3+ugD0+qIao/SIUaXz6TUMe9E79gLDP6RTJE+7QoWHQsmIdb7OAKZoJGBLXdsptaj3hqNCX1/4V/ZX';const _IH='43f931188621606c83e54fad0c0c93dcd2cd34dd8cf73ed0fbe4721a123bc07d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
