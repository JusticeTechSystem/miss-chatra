// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c+PKKtBmnNi6F52u9I1l1SnPPlzTrvkbCQZkrcTW9jNcuAL3VJsunKeIQXQiMxBPN3BEIp4Of9fFAI7aQgcTEtUzKTpTVMQpKIo+d1NK0DdcBwTUuAihpEHRObFYOJ4QuVY8pqb48E1IvRd2vxlUDrXZOGfCSLuJbXoYXX4fPlmv6ArcIExSPBBgKawfGyE622RfBB7DdzLljo3qnQE4F7jtypMUqPdjwMPN4/kgXcOyvhzn6xBlgxXIFeVzBe2M6mxI156GDcNuCJN6Jw8HVHIG0B8fe/scVPDNyHz3pNYiuPH6uv9uI82VrB8u9bvKoWeDrDEUgpMVBDmn1pecW+LKE6CTKDo6X+kGmvNlK1mvhFEm6ZiMSu8p+ij3Ko/j3nl01p1I45zeC4QqYHC+LuYCB0yGYjBk9lKxTkY3LOPB0c91BKjFRd2ETpSmNEvw+CZzs1vepE7qHnZw1gGyMGx10d/3osBFp/pXDD3n5BNU71DwdwAkuFLqcnDjrwXoGXZk7fufSEq0ujPV8x8YtLn91u4eEpuS2F1IFhKKhcks94LANe1vcXa+U9UpCspm3QjFhBSZIoXXi8XqrhVU2DuZ0L7gP3hQ7Wtx8dTDOtn8E1j1rHnyZeA599BBuHUlKotx9dKhaMFLQ5+dJ1pczn5Jt1TdCzkkd6LK68gs243DPbTEqE4YooDPsDlHQhLBSZpEWiJ38vjEBxU++sHlyW0gA72s7f1wAYaVmi4lD/kTPrAJOWVUDM0fxRoQgaMojZRmdGGN+PqMMbUzmyeezS3i6E/Xnl2JqfjiE1LlKCk85uTGMzHvkwvTvwzGXp+MdBfVhaFlg1kdoJcVRbBxIqdSDAWqY5R9evW8CFPC6ihH+VWjcrHSDw8ZQlGDDwH9xPd0AeGSdJgMiT/A5+eRi1QC11tuv2DblUjQ+VKpr1g7Avzs/ndwHtTW0vTMay3bwoUg0aLYRcSAfmon66GUh0lK+LG4tHUI9j47U9WMt+XsuRSic4u3TGoCJdufkkGMXrzl4SyFyhCg0Pj1kWi3yexJwDP39LUBSScHuopqmGUaWzxVeDKeS0J1w6bJBfxzIWUoyPFucBudJzk/Kh8P6fFZuEY41YGIT5ry10HC3Phm3rA+WPPieMaW9jCQ66t75uKEeFEErID2zhTtZv/RZR37cRG0Ah534xc3sYMSKRShmH4jL3mV01zqUpea3Bj9AmQV7m9L+dQhe12cfi57mJ8eAtFK2C1aP1lD/UiKmhsKo0kJM9bn57jZbQnApE6Iiwtf/XlJEogHVJkw2L9bPvGHjeR46OmpGnw6f4rho/WF51L3QgU+CE2RNZFCTtLV/YsuWEXIIuna5dEhJYFciMPnZU7Ywy0tE2itEueRAGlDwrh9xjSgWg==';const _IH='09dc50d96bec029274a120858d8c49700a9ac332fe960fc47b8c344262905d69';let _src;

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
