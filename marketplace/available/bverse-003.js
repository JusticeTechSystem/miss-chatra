// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkf6XNUcIpmjVq1unrH81TxluENdNJfjconRpNLvZaNGOb7tlC2kB+WKUy7oauipeRrFUpDMlPEeG2nlqurLT70gq4Sy/Sz5P+9SblDUAQOe56lluBeo2G0ZhMi26WPTBUZAq+M4kzrL8dS2qKnXiHh6wmLeU/+WxIkXtFinYrb/Pu0xSeFZUK2WKDUi5bm2NNj6JPPk10zFrGW0zOn8XzOjvtRK9JmxlAyn9bs09DdbgoCE9kbxpV2Qp8T7o/xnr/V01a42f/762DqY4+OFDgiCuow8wWDsH6flzCRPbE9YDArFGIXDXR94mSpOcLKvcwFk6fmMTLcseSCegecKTVa9SdVJ68ZDC4R8sRMAJib+ETghY/p5PxJ/XiYOKZp1xGQSD0a7xIWjIH45/FdWRjofA/O8FK2mXYV1WKVkYCzhViwX8jOnxLw2d6JpZT5edutxozC4ja2JnS/3EFv3XaBK4rY+kJOX4z16qGATLr5CLYt8Xs+jgg4Vxn9WullW/ECUN2lBUY+GYBr3luAAv06/HqvW47agX1fINbMXv/p6faV5PIL4ahVp/QEyxSsIkMrYfo1a44ZHwTLl/cg2uXbFgyJkGyttCOUJHrYuxdsZNf8BPlRrELJrYQoXEgAgkRhMwv46ZRddWphVP8wjDZkGQDNmThkIPBf8LXF7V2+Wtdw+e7CIfN5rUBRVC7ost2';const _IH='33b25e4281d15f156b654c536fcbb882b1f6ff6064068a5a9b52ba0cc946e3b0';let _src;

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
