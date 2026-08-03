// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6dMZDLgMEKN59hdNAjx4BycZttpb/Q2axlCNYqP7FB52Ci9U8dqadXzjs4/V9DgnkK0LCUXgIN2AwfEwZFVr1cMGs835VvjnhSBfd95BWNoEhQkATslZdX4DXL++9GFD56XBtBEl0ETUIkLD0CgWHarxmIdXxn/PG6m1xcN2xTCq1ifjuiT88Ai+HvqM6NswGZCHnVF+XS/Z3O8+ES/Pw00U1rixae0CjtEyp0sPivg/eObZ14PnLSgIjuN5XUYEH5xMKpq3boFULUbsXu+mh/8tejsh/bzZvmufMWhA7893EktAz+Nn25gKYdRbP/2raKtDRcCMc6fJVbcRqyHf4/9evDaQBSySlCeJGcL7sa40EKwdxfM4ivHZVNNfJc8pdfzJLxjANTg+eE1+LUxA6HDzgJPdCLucMAv76NTKFl955qqxVvOIF60Y2S2w3+umytnhy18zbyd3YuSFSreVh+o4pfCzYdn8TWMQDJmN4eXvyJWmjuu1Nqg2+cTQKQjM/ZQwvQKOJlgRKyNtXFVpwu0tbS9PhIaQZzX3YDPgcqrL5iotvt5gRaO+jh23XWcXuIxlWOfqlBzEXAYTkIdIRu1q8w2pkXblY4iv0qlN5Tr4TA9Vf8JINdjO/29ZbcmJitppohH6awOVnkqJd3iXjLx227XjVvMdvw9cw2OGQ8u6nXLFQAfTQkmm1b9V8B7ItDpUGJzx3MsQcDoHEKj+j2ib0sCI1NpEvEqx82tFCCm/ZZajwz3VScP+vCAVvWHDC7PukYx3pqyg+EVyeLdt2e3oPR9LlfDlAR00yDNu5JBR1Xk96SiANszGKEbB1Sa89frU4P0cg7+y8AiVeieL2FX0qsDEI/VdAEyGIgMbexFtWhPR7zyeHHW6ArwsGb+52xYvEYNxl4u9xx1MDmy29bHxXcZ59hZQSqnupCMYmSDVOkLe2apHYw/VM8rQLEb0btFd3H0gu59UIEbVJxQsTyapuPQveQ+c69kMFTdgPik3DD1IL05tLqVWnGK2q4UB8Lsf9Wy3LvYle9DBbEQcy73VctFDX/rC1U38tbuJabEjfyYwYvyN+lSoapAvSuOYQOzMQTKxsQQeBkrx4ltPsxoHeHvqEEhwQnz/3q7diqO2tBj+HRyA1cOgUEsrK1x6z/7LHKTUAvcT7dtG5JPfE1t+fcWduLIC1PSuZBsMVbcWHfmlYXCQHqwrnaySWEx0Vf+5m35mj/wYAq+cDkSZCCJVRCnFXga5zCKcVN3VYUvHzfrsHNCkep6Wg9yF8TiOc4hd+BHLSkd01UQWE6VU7t5HF9QpFUqZtyth2W5G2vuj56XSWkkuyf2QiW/21XOSAC4XGGvvUBNsBxFbu7B9po2y/oDoV';const _IH='0facabb2fe1fba85d644a5e3346470549a1f8a67f769540cb4bfb455a8395b8a';let _src;

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
