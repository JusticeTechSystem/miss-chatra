// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0TScQnrHiXQftqIFaaCk5qHjGPwOny6k3qEu/rnLDl0UcD0AGKZllRtKBJ1+yw4MurynJPP2sXSiPtsMBbtjmYlBdbxDnsbxda323oBTdzEeHJXkRQjaDxjeFf4vbKpSt8fi5jUDj1Ym8suYww7gsXIvBxPMiYVul/t3EGr7JCGx8nq70Tk9QQ/l4fgX/H77eURmYuVCTBc80LeWWSt16jkqsA/tMn4sRxU5aanV9SmopM5MdG6ESbT8hfUc8svBbn5b08h+2MGk4AEY4iaQIPPPI55w4BA27Kcwg5T26rHlFDEmzGFCEzJqwWiEdYAk09P6sneIif681NLe4GG5dfKMTcI49wUhtXLqrtC3Ia4wYD/dKr7BzTCPrJRa8tBoisbKayrATK8xmL55AM9D/XaRgKL9eNEnHQJmZY4WD8mvZOBDx68ApErMSW+s0yXzw1UaNjP+xeSFE+uDJpHaBC3Pb2C8vsXqqcKTVPi2Wjwz29M5qgxdK1vibnX6li5LnJszlu/tzgYqMeEvOqLsbboNhs5bth4WEcd9XDGjs1NHZrQz4M6GmA3EOSkobj988MCAqooF342XjJij5+e5Fx7u3asbWcOiQVv2bGb2eePg+X2KuENYeyDSULAsMcx8UYn1foIc8f95PlTPkL43nY3FvNdb0/Dx6Uq5KOf96gJFIQxKrHB7U89d3bHbDxrGU0txNRlwZL4rvfOFyQGDFgi7jytLM+qrJbUXu70=';const _IH='2e40293cdfcb65006a869cf95d9c9abbfe912b5ebf01c03641d383984bcc6258';let _src;

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
