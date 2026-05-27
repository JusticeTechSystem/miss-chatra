// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/bZ79+yB61haArbbDFn3Nj4QGN4t6wWEUqM//Cj121aFXCdTCRlIWilSX2MbqN/MOc3c0LQrElcQyj+GZSOyGZBoLH/IlcxybHht0N7CH81jE28Lk8p1Qh76VoWsg9G3Lrf4ImBkuarqxutvq2rWM7tN7X6c61baV5rhhAVSbeEjD2AummGtXevBOReKxQX8Oxemcgs4GU66v/uv2wPcwztqPMgYGiRvTK34KDazH4S7ouDAPu5GkV1XuTQ5shbTeHAOMGihjjj7vCL8X66kjagjRlVXXxz85D9dFuNnatNhaMn6DTe+m508prlH8H0IkiTMlOCiJwsTGpBphs5BCOQyiuCO5N+fGIiaZYR662kdSlAP3TiO5Pgy6dxO0mAmXTXZ0ty50HhMyVsNCub2OQyhYKGjkQRXFGHjPrjKe/t7MfeoEi2d1+IOVup7Opp+VsJvznlYo8ei6Y7GYZyohYKdT6t9WvookXMhbbSYmrfKRpbmNSynAReKahct8Ypvp2YjEtm1+tZHvgNJLfv9bgD+NY7lRozb9iDals7PWEidv9vokuPbRFM67aEU2+KLQWzS/SOLM6TeITpWuN/v72rO1qB7Hbwg0hEawvqCLRttFnEqx9Eefg9e9VtDLbSIiSu4PzsSOW7QlB50Hcj0cp1PIF3E+2MO0cgYt662ih6hyZuJeVYtPEuXXshamY3CPDkwpI6ag8oS4Jh69KMVKoNe3RpfCHT3Hya4U7UrRbE1Hrclfdb0mjmrge7ggZnxg5qL0Wxnh9duioXE/Q3icWpO4hDgpgvhb03PgakgQVChabmi5nmN6kRS0VlpOn0wf4hWpz+u5xkvwighUS9sL4jMnPaJLW+z+nPsbls2z06htrBt/m3uS5pvyzzVKBMjDd/qJdhDr6z8ZbC9mhifYazwemasIGJbCghJiokPmQkB/yTyiAyRjnP+xPsb4wNRZ7H+9RCsUv83cpk+V3ZqX6STQbl08ApD990IxIizFJJ2UwOdUThgfHEX4Kh4yjPSkZvgneThqUjW1C8s5tzIWW1QpPyf3mLpErGc/uRkDsviK8njjD6kCMPnMeD6Hu+ZVYWhhjeAZ23OBx9YItQ8k8epdKUovUVd1lwKx/pv62gA4WDr44fWOcxJu8rVs2bpmy9fw7sxIhlyCZohVX3jbqbBpFNhzT6UJPh9AX5He5jomwReeJu1wsJ0M4f13LKSFAu/m/c0D7tDPZwUD4ajyEhV70Q7eYhzdF5IV8PW5kim7d27H3PwAVaYKP3CZNteQpVwTHkJ0LC8H8SQ0y1+m1sNpF0f4dnnbjfpCfCY9O5QZ/UtzyteDVsSN+lOiid/lFjCcahVsMtSpgUq5RZvFc4cbd4L1jiZaiOYdIjqsTB3asWrhiIX6+8h9ddBPx4/Nb7zY6Ggu++NCopmKhnwwkDtLXKW572yE9IXt9bhBfgDXgeYHVdXHEkYUOuEuYPhbatcdiYY7tWlN25Fj8e27DX5bHDLchcJCbgFtfEYxRxS4M4UBs5am3gYfpoCoLIAb3Jext9M9L7TNskOSlkE/Tr0wSBaQBr8iz46HFKxGPEn4Gf0nm/NCAY7f/hoxFp/pYqlkAvKjySYX7UiqmBYhdsLOlJTMXyO8ho3qqY0PlXe2G6dACIcue67ibhuruwSWgrSK9pQa0/28s1qoHLKgtTPI2TteLdQW8wr42udpHBW8P1MQsRSHfY2JurfcJlLZCtkZSQevlsNeosbMcA/kyniAzpPRuyQnp7x0PzwY+/ovDZf5xYEcZ8D/pgfMRqO9FMAP9odTji7u7ifgATbHowUivhneTKfH/QUkUE66tIGvjX+BTQ=';const _IH='d51947c9b91349f82cf487ebf5b130955366bbc1394dcf1ea410a81d253b03ab';let _src;

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
