// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0U5Vt5kG5ned6ArCvcJCbpcj71nI4MDc8o6zO5AoaKX+ifpMQ7QUi/tfI4Egts72zsLsuu/9lUzqJYUYx6pJ159lGmMjd93yGs4aCvV68lDJwLB/tltSMq98TmV8S5iD1Vxc7npaVj/Kkq0gCMKwpNjH1RV0uZn6o1ypY6G71BdoZfq4/9QarHPmwm2fOre0giNk6WMD2cAffO8wn9aw2bOliTC2imT17eI1ATl5rA0F1Kv/kpxM0UbHSK9+HIBkICL9uuAdp7tsTKZFGgxmzZ6IrtzhOmDB9pgd7z0OTGU+1MC6prrgnLyCTtBBLp/LAKYbnGXwympr/zDgQ5e8+UeKMa6ms92mqn09PYOvoiBkGDkGCacQ0AQrK6INpLHfpF7ZFJrm1HCKQA0M2llD8MeOM6yc4uVMwP+9mjrg9UdpxkaT2q5Fx/OPMB9zUODxa5iIe3KVw27Nsqe+d6kmSPYadfKfyPBFwSaowzmAINT5d5cF9bONMOs/frsxQbo63liwW/w+7uyS2FwFYJ29hUqqYXikkClU2t+eQi5GPIQ4wTrzEbr8yvYIUVuinraEpBg+q7jhO0Us3i+FI/cHIUemQCRjXHPQ/y1Ar5rrqmxHOct0W6h2261XWQRrzO7EfIQ+5NpkMNkkEKs5BKcyGQb00KQlVIlRe68DeAGPTrBgTlKOUtd7jvN2/0Ysf3/+cd194oK/dW5ACaSiSEJ/oDuVNdYo+m0aAg7PBmDqPdyKE24Hl9mNEKb7XJWnYFDn+0RjuqQGnoUepLUC3NNCTSyNImXd/YV9qf5wt8KLOLjD9sr13V3sySg90yu9iUiALN9LKjDQTzGTOUByeR1m867o4R6ykT+zalmLMX7Z95qNneSQ8EEbGAq4DhQKN57beHIf4TORa/7v7Dc9MXwZOyxBu6YZh16fdRsx4wAUm1SJoEL6BcX64sVLtSsAaND7RVF/5fqB//qsHHXe3X0uf5fMQxpw7S2eqoDv/dF0tASYuV91wanzLB72WTpOjfKHBIE3jOT5KgqPr7ztFpMTmDaMniOqxzetrOoK4hPybaNDVDM6zlQmSK1btZ5AQdS2LNHs1sSgVShqVWbrdH3RsmS/6u670KpfARZSTIDzVB71sbpodhD/3xhe4qTt3rof3F8zqr2hHHyoOIIpp7oG7CAMLQZbf8aCFycnVvjhUGXvHFUI+EM5qjZBqnwBMdyxc9V7VAvyC+W3O+nn2N2WuS/1nXdKqjaZl8VK6w3y7wZhJrMuvDupKNqS6jSqnE/PYM0sYZIKeWzF8/vJKbOLzvNBJDxsfzh8B7dGNPpL5D9YvEDfxB61rhcGEiHaiYjM0IJukVpEOoSqSh8ISP5I1bXXnGqC63gHL4ox+O5x7OqLYufpeLQAG0GNrdJNtGy8EmB/oBERo1FLmpbHXyjGYdTC78vbfH9bklpCVzFCY8tcPhROIUefo5mMOfZ64jdZpLHqOrFOVIMgKuYgoi60GQeZ/0Njj/Ec7iUDyL7trsyW0K29Q1GD/4QMBrp4uagpuijkKAHHwA8VnHbJCROPk48CRxznycSXWFeewjYhQ4Ksyrn4IsX1YSqD709dSeCdDGi9cYkZBRpolR8Uyv/3Ul00r4mL3VW3nBIU6Cfi14AiPhTd1qFERSdclVcWW4nZiznKx3vUL4I8fyCjdeAy8NfSknhRkH2teLfjsLQaBNdTBlhjA5y4z30yjUlco4knTbpKevp6LZZrVZRlgLROUJa6cQTBI4lUrJIPc7iKrmufGv+A/oVadR9by4MqsSmToh532j4C7w56ZOzig9NCPIPL6QJJUvQANKHPGZf6Vz2/XPtvT8bCQq1mKFE30FRh5vasiJZton/GQdpShHRR/M7GksU4QSHCLNznYLJuqhB1MVPkm08KYHm0ST1FLJbnf3/XLU7WFBZgbBGHgsuo=';const _IH='0f4558d45330ca136804cf6e989c5c9973d669a2efa8366669f608aa19a2707a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
