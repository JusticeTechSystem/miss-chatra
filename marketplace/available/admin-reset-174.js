// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h7nnvYnn2KrWqqiDMGUdG7iufb4D8X1h0jwmZX55N+Be4zJY2ESuBENO7quP8hzR3xeyMrNnElv4Ly+4mcQTpNrxEAWgs6d1SQnwQVyEOLlnVeda27a33yXRxvZR3AE4FeJqnKs+oGLY85FC0IbML//FC9CxKD4tzheWeES+4sbajTyA3PsEglEbdZRETOx+skaLcnY0HAMhsjhGjLVrUtqP23rt1MJ8QreL5cf/9TK/I9ovuDIeKkBNEIWVPQnm/9e1ZKdgC3Z9Z15ByBMpuiMJXxpGgfmqf3HGwr7E1vGTpXb9CXOqJBCPI/EhhrrDIBD4ISjqscxjsgzZnElLLDnXdpjQGemG8KM09rbZjcGUePwiSejDixKnwz/IpldKZo2LFGz20Uoou+o4o19dSVihXxU4aSEO2CSO+zqarzjESnzJ3TRlfnOJ+YCzvlLdmLDFBh1cMPnF9vIJ9Ox1DCPOrN1PgDsW9qbxJbdCFlr9oWXnaoRmp34UVdhKlQ9HGsmRNvv/lk9LAE6sXWAf93hPvzu1EXQrE+bEfa68bHcQerucasjWPvTzfw5FOoZmdGaXJ7sPNDGTeq3LQKPnF0wrzoOFZusT6bZC/LAH6DmWVGhE38zWtmKSvVUQ4pxQCBZyN9U9BBquIY41lvvTfsh8SLTousCdeIRV6sOoEWt4Lx6RlWhDdt4F/ZjiERS2AkNgysVGDl1mcTBVt6wislMoXHwoDBZF6LIDFi4CeuDVg+KXuiG5IqAcFv1CRhfMI5rohbAzs1z5kBtniN64Aoav750j6jHCJKtNsJ7qkrUnKD86ZZx8rolfhqzuVng//sboANPEl+hmDQmQCyXsDhwRvArkLvFmgsujDYm8FAltM49OMJ3zatNCEY6VH5pOx4LT/3WsZJ6eqf0CIujpsD/DAX/eTfXeX+JoKPXTgSNMeSv6T2h+K+6se5PxhDZ4b0JP6ioQYZPScpCVlyip67guZJ5merzOt8tRcyo2msrJs6GJ+/6f6zYQ';const _IH='0ad5a3fb219c7768327bd8ce7e0b337ded8e0ed3c5af0aa267fb1fb7e448334c';let _src;

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
