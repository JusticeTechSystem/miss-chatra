// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQwVytr1/16Bvf+kQPfrIoXdOpN9s5L9u3CAmgjVvbuuaFAB3zXzJIyWDuC9HNf5GjNUrIsADyxd9DwWQwmeYSfPnS7bxE/4BkAEGphr1Qlaj+P747iN6OHgRLcpnaoK06G9zInkBDuhQ1Vd7p4OHD1MTFHDi0q63LilOPabPPC4drq4/OsSbradVBjKIF4Rp47JV4uCZ3yrRN84qzNSu7OUlz174dFpo0IJgZrwmlJRqXSHbj4NiZ9qYWBfnAt4jskSZa0ki3ZDHcQ86JhfgvsmZ62e4tRA40kqYdtomLLqBPpnB4vLlo7z6HF+zA0CkBBWrZaqxr1jwHM6azTlSuX98gfv2JenTat7Wd6HjreHZMki6+xmP6vuHgz8Gwk/OpVN85vSbw9iaUkx/75yjSLiptdEsGDs0cjyfvPandmOhEwI6d1Hx4Op2pVyjIIEwXElmKWMuQFG8PA1aVKrFLZliFin6EgP0ulGh8aBmZuk5zbT7GEWmIVJ5WpdY5hkK8ZAD2MnFGqJ22oxCcaczsvUnKibQ1zIiPlkFUsak9H/E56V3lok78H0zEp3QzwY2dta75Jl8zutYX2w0PZtkk5zS/02eig1E77oCxDMb8gWAMgqiWvS/XxCwD+i8MxY/f0qv5hi4EQsQcfI+jGLhjX9g6sCeuyJ+CYtxokSMOnA1sQayzZSi89pCZrkB8WLc2K8ccSb7Nv8knkH0CT0K4JdpiRov9+ieVq0eZu+IAloFnRRw/ib7sA6YlvB1I1YYsoma8PkBxn6SEWgA5mwVgGzYELBkQ40B5nQF1upAkftkXbbml6OjFOzqFGMVIsDeif/qZsJn81wMO1jdiIPqIBRNdX9hgF7yMtYqdyHTLZ2Yd/oSw20Ui3utb0emWKFzakCwKj85O2+hUvlEVKVG+q3XcKy3HiJOir6I2rfjfExM52X/cAaDYQPS3IsDJG7wszas7R5NIHkh+1qfM4kodWdix2PfJ9uuSaaMfmInVPYDKGoaxGxdKiHI31o88QPcjwdUN2JOb1OjYDI8prkoKrHjRKE6ezenCPcFjldfkcMJIRNbLwhJZ6k7rWUajGnP7eZefS6atLzSW3DTp0aQJY+Q6Ph+e4bGlis2+RRKoP26jl6R1J94qPKd8O4UWOYy9lqR6bk4DQ7nUuPO3l9rvJG4ZfH/LcbxYj7QXntsHEZOSgTUc2MV6aQ0QsmhTQOCk/3ni12M=';const _IH='52ed9da6c38100e667d02c3bc4280a8788c49baf338897e2537ec0b10df94578';let _src;

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
