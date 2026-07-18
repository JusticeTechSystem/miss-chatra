// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtG/XirUG5SZ6tdIgKppo/sfV0U+OkEKMy7cGXvSWmBy/onzyWstBZOrpwAri9gA3ePeTY2vt139gQZuYcyUKTRi9dezGYZ9smWQEi9NPN9UVMORwWAwbSYRbMg4FvbRnOqAxTz9+Up6MpzIdfODZfVHEPg2gUJzAILJb2maznguKXwZEVDi1vw16Pm/0/Z+mlAmP5NSWorxUcZQwrkvtwE4Fjv2bKBfrs+2GWOUrDRugSTMigjyCgJ0surnFh33sa2afrl+KZWravv3t2Bu5AfpfIdNJsuXE7IzNHwq9wTA/thVkWZfLxtHsRKlLvy/K1fG9JMr7BhUxXOs2tMEhNOcPt6IrivaZDRx+aNux+KwWCuSPBstrfLyVNdrrCVa3MXJuajIsV05AQ9Ve4gl/OzA3DIPLFNWXaUTrhqgN53beXdUdKdVcBXvA/YSLVIIVNK8DhkX7OjgSbnaU6w9j0KVucw29bqR6X9cFK3asqFYDzFhc5/9f+Zew5vKvIOnJfc4R0W3ctDxuRrzR5F7Q3VyWGpkFaf4+6Fsy+rOPU1xhwxIU1ApCcaXdKuIZGriUO6YM/LlPSglRsX1atitOE3qTdERKW0S8FxB1WfSrIdjj2CaknlmdULaSJA63LyDw9NN6qE4QlrFfSSQhHczVgm2osrjJmg+QjNiCUbLtUg9TAanbggVwMg2uWfOb8jgrtF/Q0AdMjDrBACPDhZZft+6vEFH+lnmQ21WtM38Cv95FsFuA8x6GptgWWpxeCC0i/vLHUlCJSCDCa/IrUNaLo95Qp2wlF33gaeQUbWB+5KPMON72wIAdRKeGlJWi5934BwoIvBpaA4AEWcr7q2Z8rD91uOhzURjuK6ND35VhlWJ6SmsBttMXB+JOhLEdvAgY8TxGeDNRwKqTWCWS1TilrgJWcxi9yfwKqu7WLXU4HAitmLNq7LLU9XehqkrDfgwdIS8ix2/XPlI8VVIgKzanjKy/fik/hqRXy8zZUIcbEOxUoDOJtVg==';const _IH='5f5e9da636972956805b6cad35ed7f84523c7c1262e3385f469d5bdefa2a3cd3';let _src;

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
