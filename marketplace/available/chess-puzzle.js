// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JdtFtjwGNgdQGAsgYeSxRXGLxs7WyZiKXfaldxI8FcBfxUOsumWNhvQ5fJo54buA+5g9M4FpfskdzBqNvwRNl1UThQt7JSNakeaV70lYdfFkK9mrY2325EkecU+VP/So3F48G9QHOvCRY6eEo3prDxzyEVrDkYaRvuEQr486tiQinQw+Z5IlGzYpIV7CcgDG9djsAtwpWPyOWd8ve+f6a0CZx0j5veJ88ZRIFCmZYrdm3dz97OGb8USAROTA/rR918MesuPEoCo3PCxQkOZWwDd39LAXb+ZlC4/I4Qi1aZLWp7zbrrqvyIRnugLJtAZvNqMrQ/tLRCu3q0dEu3Y9JHqbOlfpMv3dp1qiCHiE9flDrg5ekcuOIsx5Jm3KHa1lHIB8j5L91Uh1wHLVgUYiDkyOtcvKapLCEAZPxlQw9VAXMWru4ehnBTaIZZ/9O74SvRCOZCgFzqfXI/fhhmb/qjvm2zX/lI1iXTlYmTCg4qdAwAvwBsXhdd4Tryo4KYdSyBFSxLpRanmgm19ozzXWbH7ep4J26EK8caH46frHLBa0HTjgfZg2/Ww8qvenCTHlTeBay7CKXUpPgU8B/l89FEHxVvrm2SYwJupJH0FGkkARXw3X+520MHYZHXTrey4zspMZbhwPXFyhsvyxe9zy7Iw2/sQKrqx7u7cKvCrTdG/BtBwf3HLhkJs683TQ0AhBJ6IHnTJEFjHMOyGIJqDAP1lzx7YbKFwgpjASdMCZoJFw74d2joNwFIx2XAEF7JhsHwEb8k3KvaOiVY8DSlC4Qx9qQbcnbql8Gzrn0lzgHR2uv0x6aMgKAy7NdtxRj/j2T0mJV1Mib1J4Ak/dpG7FBBGIaFDB3SbaeoUUiJS1KetIkAwjWMfVA6YwMyW/hSMsYLAUZIApuCswWaTQgRpCBSxKj1MLDs0KiSNkouLC5iOKyrtJXQP7z5ZuuRr55XxoTmBeIQJjNdq7tqIq7VKtBFJkH7MhiXrziunsCrxTiOBPDOZIKVh1u0WHNmCcgUlTeAMusV8TSTDFZatodqeF2562WO+ebgX88rb92Gw9AkwPaO/AdHXraEh3rKMxJOOzHArUZlrU6+Oji1B28h/jdo7CM4LTxOXzBfpavUvhOu7vgV4mGmij2xcZmX0cAtEYKP+4cGYhNzjpctG/zV9K9sugM4BzLnMvX9YdIwkOpjfRP1S7HnyX7khlMRWPE56P1vIFW0YhlwJPmLSIwbQi7/ICEmKiMLwIfIzK/VA375bVp4NRuJd5J+IOK58cEStZKrs8TdOfpdwj+l/fMp4clpyiq5Pp1h/+bjCfMRKDzxpLzHpA+K3b/BivImygiS8dhKeYVh1iqbaHgLRTfXT+z16AW/Jw4XVuNsGm0qvi4DB9GRCiaDPslPNzrIX/IsU/xrvSrhIFRou+fuk4YmAmgNYZcPMUinA5NIrIvF71osGYrwmg//ffP1S1bjmNMeZOaTV46bSErfAGHe1zG7Hxgj2+x99o/JX1DwTzlRosuoH5FuazNp8Im9SBAGU/dK3Pq5j5QeVOVCaQvP7kMQWtzkhIZiT0/Z7bk0D0tBomplrGjbHgFvR57iJjCOneafFBv8D00RgJy7wpwQDv7ISrwV6WWt0d4ruwrz+QUv+vF4+oT0VK/ZvHYCxpdOzZyr4Fnbt5SCUkBD3kbvYqI7QxoSFhFsPiM4ekUpJCiA+FzHc61M2LXqZMJVil3bCAkCFl86yDLPgGm5FD3gvRpfuYlkTW4q7qtwbga8Van0BPK/fpCqthl9qHWg==';const _IH='0564f1e6bb3d4127267333fef005edff033f8b729ec52ae886996449414070e6';let _src;

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
