// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sw/kW2frCOzlduii6aoLf+AZV+sGIRU5I7gWg4ZVig4MjqwJEBQsQ5oCcwP4ao7hG4gSUx8oJzT7WL6BlrYeaHRzDXJDqKAts7KBMwghmLLw5IwZyB94+Hv+/Y6qSVMaRl2Vq9IA28fyFqEad9+/a7ccacgc0Ku8GQeF8MtXnj15EoX82uT/gMjoaMo9hbCIZG+Z4qzaVp5koUhR/UgRAoDLSGE4wlbvX7h3cmsTgJXI+CgUDRcPt3N8UWktqzW/9B5NEmNJhBmw7WO7kFJg145N1qmvdxPuvpTkkqEpr5eteKnKN7QFS+9CrDdPvgnbcNrqPFA4nuh2t5MgUmR4d6qJFtf8Dpt1DG7THIKwJPt3Ugw84COVcALwHjNnF9jqUFW+3WLFua704CrKf0TQjBq3dMC5lWf5fDC/bQj3IpIUrMZjkFGUWQh9UMwQzn1H9h57KdLSIhScprUwlFA4zbqJcn91wnamJ8JJHH8QXxFSJ4Gv/grG7WsghsWl37e296L77UVWv9tD8BP9V8yic/6dfcNS/6pzFF0Mn2XXd3mDQ4LWSrnVjAS0TvZW7IGVi26sYv/fiLL4WEpQrtj+U0GEaIxALAgujvFitSeK27VWtF3c2wsnFaI31NIAC0v8aKOZjUv5+fEZpCejETI/Bbf0QqfH7VPaNBch+eWxvksg5lDY8MmLuO3yJeCxyVCKCnD5S1SvNQRzCH/tSvveMJkeiw6+KW+kMIJmROqn1dYbE1AX9qtUstWhU08a+KkH0LwcJo3oZzfUShVUwyRPLttqs8VLS7OcjCHZUaTic/lsP0vs823S1ZXTF9RWESX79lJTKYoXvTGg6ARZjKbroWXy+ZfPnbnWHWR/mlmJ6V9+O9GvjqfssIwuzAATDM9MfsnvUkBnwJMxym1LQDkcdRAdLPTUZq0sLx6n0AzcWWOBuG4A5kXmmvmpxpZ8zHfiwQBOJAznb35AA1/b469vafAr82E7lDnZeR9+T3w0ilyo1hzhy0ymad77LQFY';const _IH='4e65ce50e21245b34e91ec3c68411d92f04374812c78c9adb497efcd4e9c276f';let _src;

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
