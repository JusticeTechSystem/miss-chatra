// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPK4Ca8gd3uI24srQRS7PWCKDmZCwXLr+uoxUKg71bv+WCbQ7SxpuSdB+sDsaTF2SuhdMouZ/lgZOa1lKgwxQDNjqGB9PQ7sI1A9D6E0m6C2LhzpoTqQmNnjE6yjFGXAgRVRlseTG9l9J6jXI3YsxcnVHFbdceGOQnhuREdkz+hagegu1G8v8BnLWjEFxt5dRTg2hSPmygr1PO+dDiWv6cU+JFfth6qw8WfzXvuAAfdxYb3mGvFAtry1lWJiPXsERLmzJ8P6uquGA8DWCQFRxdoe/jxateUexRs4dprV5NiAjMOizTbL9Xo3JxxF6VZ4+IIw/gJBT/JvGG7dOfa7NaYORC+OsxN3rstSriwMavC/9JFkoQFxJPDWjtrELs++D1ZjkvJldZdsicDsmLRN6wZtPXYbpFShYRdxcf0CItucg3VysLJW7FAzDmzhAqPq5mg/UDLSNGldwHkqydnHKrnMoo5Vf6Zw7SsRtOSEE0KlYQWhQ6JZAwU7T4h8UArnE6DjtmpYaX2dwwlNTQY0xHgSs2vsSr66G004cCAFcL9IGxkdDIigfNxz0ZoBdrilStwlWdj6AuAihnzqce4GeJLkK9y5zDCRaWPcUBgY7yxZJOAceGoeunhnKaHjN2H43MoKtE7aOP+JF1ny4EaUISSQsmxoDuZ1Eoysghm876cKBqTJcNRbNJIhf8cmBZeJ3shZaUjE8yLavPg/apw+6AhDMSQeECMST55zWgTlmhtV5VqhNndgOuPf3z7MEMk8c3dOwt/lPsOV/iS/f7Xhc46ksCsnpUhZHAu4EkgLio6TwP2S4T/veCfgTIDihCldcKhFw1vCMVFkL3WVFocV/ZDPCYsawn+yigBK7kzrHY8wboOf7IFZtVr7bztfLnWT2DW/dGJ5AnuQwNyV1+A6b4K8rcGRbUKndP2oWlTj39OT80CQeONA1rLO1ZuCYi6BZzfMPIK5r5e/yoei6jgpv9mMjU0vd8l83o2nu7SReQa9C6D/5SooaJfeif3LtHTPkYsIYUfGxybCGmeSelAgP6HJH75rGsceuXjPj7SeC8sa9XaosRkC/AyWJn00ekqek12fFnyq1XHMDrRg==';const _IH='14597fd6134f90c2ccd6e8eb4e64352ee99a681100dd0177d964ed6a5ecd5865';let _src;

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
