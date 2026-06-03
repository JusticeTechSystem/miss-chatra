// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EBuyTcMXYubU/KYgN9/4fTPMcKDrqL9QdWYGjp+P7m4rsnnWT65P+o/92ygmGFxaZ14wc9jGoFNyo3k0FclnTXy8sXjhpA207FtFPsHfDxH8JLYHBWF0mtXV47fqtVt51PsO5RR+9f/wPf50KVUE0nS+zoFneQdLlOw6cmZD8vgGzC1ZtLImsmNaz/NW+bTVNa0p8M7F6oSE9pp2Ysu6LBVtoE1LcwFHmN0KRB6M91XKKMfgks+Nfpcb4KwqSnccna6a48NHACZ030Cx2vNe+mlGUxdL+DEfeliC1JfqDydJkL0snGQ5iuilZxjnCeHUbT7usfKjFza4HWewxfN78xRs/ZbLCL4ffXTdrx9nD3WtvKywjutrPVf+Qn64ivd/nuXsMehaLuA+TP9q4ynxKjKETqE//41OZdzr7lU7dIt2TQYAp1ieUt1PikyriCFUatTgOWYr9q3hY/VUC/YK0a5Y7aHY5g88tlxexfC8XLydEHB64c/vuwPh8hB7LV2hn9HqL6g7I8J1BnpDM5diM8kF0tWhW7JmmrWek0UyXBJxIVUl7KPU8+RJrunk7OCG7JZeLW5YK2ymF+H2leUTVqxGIycMufUUByoVRSxM9t6Aw0av1FuRB7K7rOr26OvdQMJcEjKf80NUtYRscw8goG1U+M5QfC7Bd5dHvttulas49e+QytdhabBNu6KtaouD/R4ssLcLE5qVUjIMQhKNWsTMhdF6Yydd2XpPrIH70gR+szAu+gDILriRpPwCSWgwRYAMLneQgSOp0LUhfqHFJuiCTh88wpp+1OJkHDiidS26RsCLKqf2oituGO4Se/l4CnQdT4w6ErbqHE4o4AzMkM7Pa8LoRscrqXtRMPXJZej75laqV84V3l+YpPK0Njvxq3YyUNc5ZJ6x7A0FZAzBRT05f2/i0LkfuERgFpS0TkybQITQSW9R2wLsCo/Am8ybIGyr2DTc4wS/Cswvo6W3TmLkG1nsBZpB6pyCEogvzzocUkTcQLLNNYNsQMUVN1SSuq7LPaynHHyy7EMefkpsmatQDvzHPfrwtSQ9GgXOILyc7skmEIxV1wX5pQtI3M4ZBvaQQh5dA1kmywWvHb4NL45fppJ4Z1vk6bazLJi0RxN9kSpvvXpWhbZu5LWGx4JgyOBlb90ua1P3Clx8Y/LHDSJMAnaRggBmDDSwaRh8Eax6gflf3p/lp4lNN+PIK5Ueb6XDbDxb5ibj4elIVZsfzzqbjrRS3QzWVDQ/FvsR9OLvX/rgtN9en/hSE5sGNfjp9GrNqN4OtkdFSKei6y8d+L+h6oWsu5HH3aROwnH5DRZFBIytJqv55qpdk1y9rVwrYSE8sjkKsUOj9OIMVanaJXaNsWerWSkBxes8NEkr';const _IH='99a00192c3302459d26a51e0f85df59dca1b383dabfb15031efd43f7936b678e';let _src;

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
