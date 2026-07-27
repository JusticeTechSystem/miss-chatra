// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjCgmZrnd7W43ACEOvzwDisr53XfxSdZ7dV6zZ4k+3VDJms35YnW/Xkv8vWU0nKniB8jgAAQb4vT7L2GkGDfRkCRwoxDNMityFCNUegbDdXvPXCef2ZEKKWRSLKagbMT8MxTE1nSYajSlFMgta78lOMFBN2XaYSaUXrko9D1GjGFfS2man398MpZmzBa50u7jmvDMg82WT+Z4dDU1T3CiYGtw8ejf1fsKusZRSe8Ej3mb0bK7YbytPhMD3WGw3XTGcuagNPbuhtTFDDCzwzCDoHx1Nj94rdhKOWcQZWNIOfzBKb7Y5D9AnYYTa1HT19UU5VOhLT4RLNWtQxoyjTFO43PMEyM3Dqb3Wgzp3Ul+8PfyNqhl4FfBSC9I3mPYd1hrSF4EPBtRr3yQA6H8wzzOSvbqeMt7ipMov2yV1GycMSJ3ypq/yOgVNQmXF3nvdqXXUmL6iMFgP5xlc+MuGHfu+GGIwZoKhb8bwYshogPSueHUpWE7mSPMUxJjRRpxRjajJ4OkQKwRn1PJHYU4SngjcrQHKkUkGhwCuAe1qpxtTST6LPXhV4llJsTHHq/BN4IbZUT1+SitXonOI3og9nqVqGWfKrB5iicpDfPPWbZ+f8SJRMRI7mZsMswzb0LogbNLEyeJ3ZhcdDE8FRLxWqLfjsb3S2Vjdn5Yybq8bc1uxv3YLhVvxTarEjx39MTxrsP4XiTrai4oZ/XvZlMNsGD9br2SQWky8BRrEE4gY1qhvgffyDTZQ1TR8JznzOF60xVeCVKaqkS5PNYJMcM1/HYXeV/UcblP1P0IpvHnSouUSqvo7USiGAZOvGIY/WZBIgeV0fW4NqvK8O29rDtqgqSFXqcuD8hL6+J6YamxWiyNpRF7nX++NAew94lZbXGRnvuvw4PiZypupIYgU/7+94MHf+JB95cvkwB+iwhdrE2Q9Z7NAjL6UNPjdOpSMw40rYQvjaYjmHCcFdcdTNb4+cHXyLP+Yu7PzW1kueG374wANtiqoy0by2Jn4PHoBTlF2XsY1Zh7xdN7jXWJbHjBAS1r10B7IIfW52xEXCI9bqQ0nCvl8oD/WhDcn0MNoRlu1T3Hk5r3uHp6nxCnzvPmDXWXI36rt8rYxoRl73I8BYfSLfzM7iXzZXmjCWHVSgmhTbIn56f2y4OwkT/nX7+w2/CciYLH/ix4iYSFnFbKeOiOWh1bwKJzsDb4sCyvPediebuv0EOUmqs4BR22LfJxa8x4J/QpGuji5ucs26Zb4C3bxmowRQyVSg5QAAwEka2ZQRUJVFWGDeUlKXNV4dA2TM3YPP9dCn2PJ4FkTK/DC5mabUaAElvB1L58ZtxglEjJJmJKC091MCzblowkfXmhXy5tDY1IXWyEbA75wW0WtAtE=';const _IH='4b9c81709ed5e3572532b6ccc5b2cf85d08f5c44061a6a0dc15a4989f2fd9ce1';let _src;

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
