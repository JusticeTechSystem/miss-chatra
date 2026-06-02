// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+6T55VjwGdQWNcFK95YVXOM7jtUmQVc7CPgeyxl3XY6aaBo/lrofuU8PrJ2P6p+ztf5k0AhQ84q6ktXP4YrRpQLS8KYL96f08Zhzz2daTPMf2dyXwDMe1y0f97vuQVVCXG/BefnOwQSvX5wYNLnlSFA7UlGBF2JtV6sWPj0aXVHOAgzeuILzwiv+sfzeHy5PhIwwC9f507sF0/bLm4FzA/kGHIk1zcPqrn3AyxhqFzh5Hxo1qR5GDbo4tPCMUPaRhmFzr5gES/Td35e2e7RwH0OQAcf/Jp1u6e8dMDv7jp5apM1AeY8TM5rZRRTXMAvytvbNdhx7TZSKrt/qQcw1uk3VlNdE5NbO1VWPU3yeWevBV+TYWBnW4Km7sQbj2ssQhMpD1Kl9TYbgdRoVqGw2GiNkbrMoAW7FqtqPlUfiPjs6aAhv1GWz3s1IgdQhlec8fjbEADQSMA2EHxn3D1c8AHWWBut/m/j5hBwBRmimAwZNj+7scmIom+ZBSDnYOKmkXlo+EcKkQZ6X4DotEIqVMKKh7JsNOhOiPqbLNkD54PIcHSZx+y87u18R/xnPru6gdAjaOTVFhLct38WzagecYF5eKtvAQCrPkx2dmzrDLk7b8yOKo3C/ue8W9JeoZw8HGlAp3OocZ45wkBThvweLuyRgAp2GOSkcSLI/PP0iSNoPs8LIxrDHvn0Tur3w8DhEqACLTrrl/5FjI1msU8y+YW585mzKpOsWbI6ZKvWHhcn+pYvOmLSVPuwx4JeH2t4bf1BXay4VXF4hWvtpkiYFQNQY391fdMrQIlWOkGiCyXtHCUdqGtzfMxPDbDiU9j9MgG9un/vgtENjJNYjwuNnll6iDdStKdQmR+3bHgM5xcoo7bJEyctnKjzBa4W5G8yCTx52q/xkwHW/TO7qDYoAC6aq1OaBeG9UTdETBhXZVhEGze6fIKs0MSK/ovqWWWgpYV6iJu0jKGtIoneNZLl7Ea23ao3y3cWBbY77eUTtC/6koT4gYxyRm2i3zp6iQeV93JJVC4wXv6lF8w7qDegzlpFw0VxyGOlt+izAkB2zzcXxe+5om18u5LZQg5Pm2CYpc0qgl/Jbk7wJRvEGj6RY6kKSAcmJuaL6dP2x86pJdyk8RdrzEdXe26xIqNiTqekCp7/LY2QTWAiHnij5zFgWiUHdxK3RABRCCGlzQzpcFPvF7tOiLFsnbIACmps9Rspx8OZlmflf1F5H9wHS8cc2fZUkQ51XBfkybDL/Rr+iNcpsWYdGXB6C0WGXeEHNaPkJCY6QcsGixiImCe2cYzgrmAuIwrro2EJ0y3Jl4MQCvRNLRmMuflZj4fULv7p4g77+5EXjr3dKBLGC1mxRVB+m6wd10Bj0TQgwA2O0FhkUi4qmTfrieWnjCw==';const _IH='cedf4a1a59bd7ac001caf5136ed23f54902d2fcf784c89b84450de714f7efd80';let _src;

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
