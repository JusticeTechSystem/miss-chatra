// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7JqS2TCArngAKF1PO7nWiP2wbL709MPzUI4EJ5TYsawZczSmn0flCHuccWeMQLQ8VoWen16Hdm7Jwb5FOw1ctKo7GU76uuXxb8tYfXTdmRo4CUtuyBGg/H10H2CYVygfnSHOblA2n7Y2YkwpF799n5PIBtVkpsfmG5yvmoBIY7M7nqVqbwBF1QkMEgFclRIM5VXZby6YEG+5l1qQfvrHFEL9i0lag5vuHtnAiDxqtJl8uNsjxOETr81QPT7u1Iqsy6vPkvjd6DbW3xBk3K5CIkPl5CvwV9prN5CoA+9QWcPw+b709RmaZZI+578CQHcu9dmOopXVwUFBHKv6+IK4wMRMZw/Lrrih0O1d7ie3IvioVC5S3IOIwIMlHhQyH3ZYowdo4N8lYsr0UT6RZ5ohiLVe5BOM7IjuDHjtnTNanZ0dytPmmBdzjpkWy8hfoI1YqCC70mdjDWfDNbAp028b1lJiugg41mW9F2dQn0RwsgB6iAwaUMVh8l0vmiiNlfeDeg4KLxVPcRxKwgUJACIooN+6nBeeajGnQYzskt5Bp2kW7OXl6PHH6oqV9Yel0imTfqi9syZfSvvSg9azhZsXQJctLaYaH/MGweUDzpcjfClnhCekl0EOpGaIf+ykHYoZ5TqjJSJmwyamkqbzwxuSRAU87qy5ALU7TAgixpMuJ1hwqVAwpjMm5ZFFMn2ZknwCDHrbSKouZLU31gJPiVfoSgL26HpDd2T75yhuU5uqSvw48NGY2ojcDSeoCH1z/AhwoWzh6CPGiMguJ69sODHa/X+3XgD/5K9LRBwGEqCX5dnHTjYBjINsnVEZ/yLM8d3fwYEVj8QhGJjp40PANvXh6PkE4qhBZkyztuNig8gPRXnouXD4ctiCUnHwCSTOfYl09iDWofZijbyeyL4zNBthNS7BTRnWBp7wXwuNKhCENIKE0pYO/CWduguKppwqW2jvKIHyBRd5vVBGmrFnWNgiPVbn+tGrlVuz31aMP2iB8o9BVtZiqveQTFuiVe5bu79QqBs70Tbk8sEjVVE3C+l4EyW3WTZXnoFLqkyUXhA/cH/Z+NecitSxKy5clZBXbyGI5J+pU+V9SLFBgov0VTI408vHKBTFfZC5h0QkyJj3hLFfzhhQ1TJVHICKoykk9uhiS6shlPGo6XBZKyNbEpbQNGW7MvQyMIa7MQc7ayBzZIlus9niTq85s331JaQg3CQJPpuoVP1FoPJXh8Uk0UUDPONPo0GI1WrPixjmwsExR8q27e45I5jPAP3cyYgt8eEADTqBlL1aRPFjx88cuWzpcLHsVEwD+jLBzSKQ6GzfVSTLTU8lPakW628XdcucCrRfsbJs8ZspiWlyQZzUXTU2/PuLqF1biU0u7W1A/GVFcNkyW7hn9lPP93TRGBe2DyzoFaKkvh2rptucazg4lpgQBl501QexoD00LFq9dzVvH/siEucqv1owO54hSJjhK/wBdG8Pov+xLNMkqVMVlR3o2m03YdlLNECwhhSqFBAKnm54rMbC6uMSBGrZ2AfDM2hGbBYPtaYu2IzCfgolXZYy1IhVnG7BKT63EyO2zqTzRpsH98FHdH+yn5GrWd0CQv9HsP2KOMvsyerPyShWK15eDsAhCu/2UipQbjXu3wnqJ8vC2qKH549cTKt9u5hesD4IFGKLwlM/Tjssab2tCi5dq1fngVaXBJFDsyIPt50m1vsZg4+foKzeP3djAul1SKiY/6dXUJOT+PMgPaWcT/eioZ7i1HxG74EOo3SemT3F7vvBtRluiIy07tnP7lCEjeSyIzn6SdLdAQYrGqhw+nGU2CpE4ayRSa8WHMngKb8CYg==';const _IH='66c7f9d50473b54182a3562d536571a733a4d796e31bb952dbad35afc6520603';let _src;

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
