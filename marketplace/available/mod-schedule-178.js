// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uKes1A1DkM0aRuoikt/DrqERhm613Pqm7j7MSWe40Jb6eGDKPri9Dcw7dOpwv2d9I7PiIV/6OzFqxxk4cWhd4QJviUg/9FSy0Wd3h1hANkVOsgjDqJSQvDvodWLm/KD/S5rorq1a179M09ZM36U/rCbw0OUd60+XL1LRwDzsf37iY24QajUozAPrFozBEpp8rU3LOyQjtvIrLcahF5jApPba0izhl4P9LEvjBXl9UkTAWnkOy3Zu8da15QxIifTXCczijsDr/bwYCyN43iJZbfagnvwP72qS8Yj9RAbiPpj8bVoX6Ys7dN/KO2RFENkHiFxZWT9CDBxTBW240YJZpBVScz+jCgt9f6pX5UDgk1pg+AsurwKmhoSDr8z8XSvDBTA8lWyLtzrR/UnEiXChaxXyaQmQolFUCg1UtqKsSjX62aHwe19In8iNjuCUy4j5LG1eK1GbcfTTW3RABD/DSDClejfpnlpnf4nEaNExL79jnm3larzgTTD30hfyH3OlU0rtUcKGk86VzKN7CwYhLwUuL5wgHOTMIlYKyzBN8UFCRij0M8hUvsTWw/GSD+EDk2lC3bT4qDlvH+bAtcIXf5RkU6ILuGkWNiy9kjgKXoQ6gPY7vFRwM1W3FokCKlInq7XlXVf6p1G6lswn+83WXMLhdEA2DWC2GQzDi8fXze1D/zqonzvzkmGjzw6MQwZU1yT+u1gYJUwKzp10IipRuYxtQ9HmJ1HN8w3GlHtIOEo6cHUDKOJjskVbvZwIeGTh+NF5lyPBhMkDM/xrnqoY4Q2FkLCLPkja+Z1BvUNBeGv+VMIvNmLnJEufzDlDJVxFZKw2hqAYZBIiJhhV14ew/1EO+EFYSKS0TTW+b3tUc9o+7RfNiv7NQdQnRo0cdgLmEn5KAzbL+ZAGJM9It/Q7fljuVqaKC4fC7+srY5nfPyCMVxqaM0E5Y5w7h97HG7xBLRf7+tXaNOe3S/flVkp85h4jBtvJnreZqRoIQ/LHiqmMOL6km7ez0TVQKsJlA7SE9D4eaOwi+h5jzy0GV4N6rtcr6U0bPNI8tZjlfPWWaJjFtuIVuYKj8uh3gCjISku5rv0O1mtMnTuqzh+HqccGbMoDREd7hScLFDe3/KA7DSQqbn6hYYvZB8d5oQBDegqV1gwCPbGV31ceL9ffuxfF53SDyc8y7PoxVHvZ1ENyk2m3lpF2OBGExHqgNqIkoDQoUXF810Zy1HcwGLp80WhYuWe64NxAfbaHIhy8iN+5Yp5v1Z1WI7ttmkdLLOG+rnQdpIP88ob6xgQEsWFinO5u8i1oSjCF57aEvCWYbOilXxDFUet06msEupnnbcgvLyce+zD4nEIpZxI/BurWZVB123Jx5Svgxl+j27VIZK9OwzT2EqtuOfwSv9X13kPFbpXdyBbj79jR/KAy6JTs';const _IH='4803d96238e6de39cb494a0ad6b5eb29e7d335dbdc673f54758beaf9fce265f1';let _src;

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
