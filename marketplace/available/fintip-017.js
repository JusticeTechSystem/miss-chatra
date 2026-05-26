// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UeUnVqp02PovG7nT+gTjgLwA1sTEcBW7XZ9qiWH9G88JBLrifMvqN84pxlqyF2BryoZkRCKBG87LoOvLEG09yhSYqQZhCuvkr13lpLdfKLETonlKNPSnF0OrCpgd6lemLGjztEnOP24/mk2eT1vXJ6PPOy3CTuffdabbolj+eFljEGLK77KdCB9+dF5H2s/vlPULMPJF+IjuLXCpj40Tb85RL1/UNK1uGQJfdrJclZWNidF4DIwUIjhMQs6tr9ljmIzlbRpMiHuabmftLjwePLgTLgpHcAEJaK4NC8Y6qWo9fWSXRnPh8sS0i9AjCkMk4eCpolviJjSyheZOXB6g1PLnIYb68BeBRZyAlIm/h2vvurjgZVo5RofnaMTHveCvb4hu6qaPoPHOjciQSuZQM/J9TLkExXNL5nEGV+sJ+9cOqm8MxwKwJ3VpBLDoV4q14SN255PfAFsDK/v5J5WOsgAzKR4qX7hrg91D19Qg8ViZ4RjFNSKQMs2ZuyrQAo8jjJMsFrM3DGEz9tnEiObaWfBBIzJrXurDdjIhyknWdAsovzqduq4xeKac8OnM1XacDd3M52pbfCgWNQul6gruSqPrrPRrBVmUrEgjAxh4JsZZMR+5Av9Xc/y24Ka8yJhr+DF2Yh7H3Llbm494iiUhCOVFt61eKzPZ9f60j8CLmFI/Q05dmpUzYGhFQK+EpzO4S1mxOO+cbnFiMvdvNR+GICmK4Hrt7BTwvhy44KQWxpbemaJ0at9nbFA9HpCZXTeSiorR3onZKmq7e46PjH69C+K50Y32NFZ2uCNwabFMZBapPM7rGd8FN6YD89GhOn3fAwv+jDvG2/uBPlai9K833h2qNA7doRdoBqDZAsuO9fV0e3BjrUczj+XZMT8tC/wR90XIY07wN08RzGK0UQvLcIIibnTAm24ow5RIjYJaY3NvYyickPZLpkG6ka7I4m824/yYhcFWGOicZM0qwpYmcVKhJmemFKVCa2W3EKokdtMQCfLShtHn+9Oi/cVKR0dHUOFM6WiIlj239nemCFh3Ni6bFSou1IQUGjgv6VNheLYPTg==';const _IH='2333971b65a562333dbd3e2af6226e0c723eab91daa5827e26405ef5f3c0e381';let _src;

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
