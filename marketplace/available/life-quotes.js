// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YQyNxKiCryQcDQaYVzt1bJAoMivlAARtKisLMXBKVEigHs9smwGMyrzzwm3eJVOiUxHcpKdLYM31NoNsToleaO/XM+LIlBj7mvZaczLBxA9IcVt4acNmONlNY6S33q7C/XSVqxUq8vHKJc8yiJh9t/ISz4znfGd1132kl7n0AsXfde3fQy8ld88pknvrn7dY9PXNH3MTiUA9Yl3DnO0N5znhj7UNdXV8yuOCg3q043rVHgCncKluBDyqk9pL16q9buQFOXaIXIwL670xIfsEZzGNydD/qIeNYy5Mpvh3xm3jxTkNnMyX3kpBcWnx8omLXnl+y1hCrW63Wf9bwTRlojg+mG9h8gJYkjiagnfgMZj08oW6+4NrabY5+T5RU5DgzaNvvH/hFnuOOwyOV6Wjionio74iwdcYq1yzq9NZExm6XMCPYQqf6A/Zi7TR14PVljgGyQOdkR25HTAz9IGALrgvRDJS0QeCYc7ieHmePaxYEKczry0xKEYfUNYccLasI73mBUZ0aZ94Q8SIBrlgsEOR3/IoOCe45o4ptqV6XCyTQQihaM6ushVSAIkgNdhQ0wHyvEN8OByqqd4FpNaxUpQ2MPvHpK0dDJ6O9uAN88Pjm9O2RTkqzZsL/raTBbpbTYVzp23JZT0PE9KqWp3LVqggFkVnTGyFDBN7ws6whQhexvHChpbAyfd6zqIA8KSo1InPSjGzXUs8uvGprrLqs6Y1rRLqpJykRRIxU5quGPZ+QRGexozzTc17tT8G3bCTqpKMcYM9we83pDY5IgSvUl4FhcUwkHdbv7oR7qJv4Nu5IjiQaOvwhf6TRtVTIqKBNJ77XuVm3/xmwfulGxeB7G1Pfm+atxFUCXk2S/Q3pLyXkeh6JTzEdbAp1PLBhOGdmNFpLVOuN8nJR4GJm1ALG/aWtDYQp/knV24OTtToSaIjmGb2ieO04lOvWfgwu9M9H4caGbA36opdfZ+xaclppajT4m2jN5xvo2jCAiFAi4EkXQ824y7vj6/fswmA0EoC/cahg159NJHGqkXT7LmgSa0yPAFt2nTdv54D2RnBOpEMwsaOJew7KkEInEQ9U5yPTe4J6FUOI0qPT9z9sOJgCNAUC/sSliKsPY6I7elFt6jeSokjNT5fclTil9cV99CfRtbXJFptMSF3i+dyK5rXok+sOzYTujzsa2/k9KUAVDaN0Dh8vMpFr/ah8AV9ggYFN23Zed5krYb6EAltOKk5zMU5B2fdDMS1O65TpZ/OI9cgKIDclR0nz0uYn0kdq1OoMI2DYlwXUK7gjdYrN3V72vKgNyie/M/P//MyN3NSpfp1+Y12+gG+6pQu3jxDtEGAX0rK11m/m7fRpF+VN7SQh4F7Y2XyzyG0S4FfheK5i+x8N0QdOTyxZKM0KpINfKbkpda+njulnzmdfEEUUHyeStJB+nhTcrZbxI+/KuQEXmlatVi4vXAXdWnNMDRZgIvVLVUe54VLiqbViJ2lBkNMgCcpU8S9lC3RPVJvLJRUhdU7v163/eGukDNkV/jxhIg67ts1Jy55sTpd3WcW6+AC2XujvxhkUSWj+BEeRHHt71Ci9ioBJYQstasiz4MfFpdIZ5pQC2uOTiFAXvUM8L3OREA5l5S+DvXi3cXd/OoZeH8tTV//33fY1hB1qRlPNlsEpUVbTnHE6ITN2+/kk1nE9qpS4WzYga9d0X8iGx8/Vzb1oRse0qKDa4QmpevOW0nc+EDlqZzoLiUWgbNqDGIEsH//E+/jRYPYcqWlbkx5LuoMHG71gEsltvBi8D49Z/mQw7aDbx8WaZTSB8bhSHQwRg9K3BeMmbMKF074ucf1baDBErM+2qDwlv3TfU3FGOq9lvS4JHE9uR/4WdYF3WduVVfRy4MY';const _IH='bb36b6cacefc17e7b1016dd99ba2ade3e6ddc93707440f833df8a91c5c43e0de';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
