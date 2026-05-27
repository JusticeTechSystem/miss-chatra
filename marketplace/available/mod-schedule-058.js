// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eIanQStGgUM7UFuCgpBsxug2anrfj3VLuTTHs+lX2oYXKOAYp57RECUWKpMCWkQXO3hSgHf3Y9ngZuSVwFOrdgIZ9qFdgi3Y5bb+Y5rtr/i1AgWb5/03t2MOHU1BMjOJdpnieYlN/yCdGL0TelfeYiv8LM6XP47ZhX2LwJMOuO+yIC2jxKj++qg6Guv+ta6PDrZWwkhbSjA63MGM8O2Fe+/Tk9a0XgEEiQm+7sgCxS7HtdyHc1U2dzXAbmhLQTKYjZhHd0LrrH8SUWnqqmTJx9dStIN8UwYSku1R+QSzb4hkQmIMA4DDjbxx/d1B+VTZZOZa0aqyDue646UEb2cGXbIAWXpT7clHGqdRY/NZNx1Sv0e9b88iwcSBOxChuNWC5A4zLkIRLCLa2+az93MhJKdPuom/jx+a4PNdN9jhO6qqBIYv7QTiOOWd0dR6OFdpnpUVh/2sEBheyeurmHqQmxP528kblt4i7gtwYJ69+cl9V7fsTvvJ1+NPopE3gVdg6s00+WFDZUBVSGvhPhuZ5jaWl30XPsGY4JueIJLfYPR6tzI/tnIUF4fTk2r/EhuuW5Ty5XPRZLXMkrqlFgDEh9qbpBLTK/Vrh8z5pqTyjko6wu291atjIh04nbfVbNMPUnB69J+RSKO/feAIakWs+qiSsc4hi1Cvo4uXP+VQ1HYN9IIyHLQopIpv+IvauUi1GAppJHvr0ylbUI1ZHl/Wtk6EnLKgbpcoYPTS6cz+poJ9DAb9NtisThidDywwpDe79z4cg6wqo947TLA5VHaFq+H+Ey6XfKy/jE4joOXnmkEGnSSvd3tlKLWWdE44khYj1IUbkV0VwvFn+6/WqN45+bzxNojj0XD6XlwrH8zCWLJXCYzdpSyrZJR1NcYWBT3VAyxS8Zoon/PPzEtcNVs+vKx2/w8WxElR7YlgRxY8B9lrolUr2sN+lGkuvVqLW47XajNczxHnSZvibVjA2RHNbuNtDeW9jl0lGUY6/DbQw6gujRmXMVmEF6zub6egVDFqMc47XNkZidU48944oADfg1pD3+Uo++R7mwscMgZV3tiMPFogw1S9B7FN88MxkGlGpzpTNpJCyY/ouToXb6btl8YK1ETmnoS1pWeWjtrnegWZvme/IteEF8sfBbPNGcVr7kN6dvNskyx13U6uQsUL0BNbSYiFpgb6U72KFHEshTNb9C1CDPL8XgDgg8mz8Vj0OcfJl+qvJAFPtftU7FWW0sK0FgticVBDccI5pf+4vScgy7fm0X/QZ7VeldOsh78R7Sp8ue3WMlNdV2k3t9wmnBFAGg2jLapHAE0SUD0lqRpOmkZ0nssuLNyVuZVc/kszUSySLyLGI178QLgTQnF55LdmV5ZJ0LWqfqEWtNH+v4wXa0i5lPgsjf5TwoZeXXS1QZOE2XcVJA==';const _IH='7ce463fbc349d8b79875015f917e3e385ce72dbb68c007dc5471abc815641c83';let _src;

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
