// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHJg4UoW9TKR2rFAMEHlgo2JIH/jIaO9NZqILIekdIN1LndSlN+DMWY46ejksgxlyBsvLu0YTcU/w7T7dMeCCkXyt2XVExOWrl8pK/fcooujdnP7jEkTTx8FrCG9mPgu9ARww3UwVXgTWVguuWFxIi32clYx4RZJXuTKxAyVqZB+C73+Ysl3CGpRqYEu16UlfVsIwBkY9Do8WmwJssoZmIXBEZLUmUoTD/smX1Bss0S0d79U0riJ0jMccmleDRKE8LjJSdbUzJtde1pAII6JwnJVu6SbJrtKR9bIM3z1+WS61D/i43k85CotzSO+gFBSdkXPZ6d+15SBmMbEuGgLlNcH7CXBWXGzSs3nh761VBy78vKhk25YyeYf8lvacJML488n6SNGvt3O5M8mQnUadkrLu25NlSLtMrgoS4RO6nDBXXPRzKXRrvuc9Uy5zw5OsFv5fwBXBx24c3/9ojDHXb3oIG/Q3osX0iXB1ad/eBYY3kHKCLITwXQ3nLn5anIdxz+6rhuZOjNl7+eWouOz8lvuPXIE8FpikyK4kH/Y05TbMmdb3Wtl4LJtyCSKF8CkSd2SmFSaVGryhNMe9FLoRHAgDJ3UUGlA6fgSOqI74DDniQc0Gqay0y/jAunAaQLzqtF5zlBh9+DGgQ9TrzZovQlUet9XVUqNRTkPsanRJCKWr3UUU1jqbdpexYNAYvPeI7y0YrT1trDmZYiO+43pyYL+FB+cHmzcMcL1guku/9V0XSxCYxJYkLr4bCLMC9s7Q0ZEtJs2Kbk5mPsORqRD/fr1Hzj0m7d/zcObDPdliTe8H8R0IC1NjVNowJ8zbNgIPQn1cs0Wp43Pcj2QTH6FvPUV0L8dQBgREdARNNWpJoZ6mfok5Piv0eeC6Rx6uKfDR7D+6As9r0VjSIGLg5QqQYkPq1XDv3Rcx5NlruvLzDi03ErEKB/ePdc1t2K6szBM92yPQumaG3qP4+3x3a1y4RnomUDmfo3AuW4dqJd6tO4TA6hSoPBpPpTV4znPI0qF1I+836W4E30WYPig5lyJ5VX9Qf7CBm5uwI6Z1IAlyH60W6N4jEx18dHKWAeH90RUaDFs7cqjCe/QWEwZp13kiqKSrW5JDJo824HR3WMxs1hCT3Di0ntUH6vI17TdOQSGLpZm1B5v2ONoCp1dDLfwYtYtFOPwy5uCr3qs8iA5r6m6SMQEwrZ/eZGDs4dyhNNyZrnglZyK5aEHzqhzqYw4PM2H6GC6MootIODnaULixUjtSmSI/p8N1f595Emff+4z4qM5g8LZ3YQggh3cp5as1m8EDJ3S+sTkPonAlwm+qwtNS91DOzJuQz6JZL1iV07HtfQha5eBj1cjr5mXJlxrjPaRUV0yI9vXckKqaNa3OhkCt/nMXI2kLg';const _IH='55fadbb118e7d330e736d757140e04648ab7b1d1e5827d23f86570397359bbda';let _src;

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
