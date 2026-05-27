// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ViJ+4+JA7z8X8N9KPaccm0p4V+iOaNRozsiakBw4g/LQMT4Lk6yBy0nHLFgRce8OoKAub5TayhrtQX4ohXmgKkvmakp6K+GgW+JRoTY3O8yA7h9MmWWW2VNhsa9FR82m4FpgvwKecNWda8WsR7Np1bUPRAVt6lRcApU6Qv4kVAhOH2j0PphJrlOtwabhBNn0/8oYq5Lrr8xH5dHmdzD39217cuNWO3vdmGOY40wscwLmqO/zpsY6whpDeNlz03xUDTGWGY32XA5snBjEmwPseaZBB5zeEIqpAORPIntx539xOHs0EtN122Ln2e83dZnYkN/uXyA7tfpmRYs5Xpeo6U1gi5MAKrYu1mtzSZJGI07OMISahGIjZutYFzE7aCHGclmCHjJWVTsSO/AWpaGU7gpJQNVYJ41s4iug/ysSxIFjKYr/MidLe5i2IAFzt9dGl6ayYGnxZjHbdPx3kSTU/1zqcdfxWoqKgDu+aPXdZ2fSqEPquRBUYIRwihRLrGqZ4oZ0X9ucL775PRr/EbfDeMi1N/9p9HbcDCGwqJtrQrreJhKFeOG/RvOWClcYHQqaANZ+i/AJ57u7TILpA+Oqz33euhqSxR0uvRHZnc9AYFzQrBCemxY7Dcc0KnCin0QdI2BF1juGnq6sGgrq+JxedqK9YevYo/aGaxc6qhh91IN5LEs1KIiShtAJNHy8v+ByNJszIkk63QW8gkfF26DfHCMrqS/USKnZ0lIr0U6J1BufWgmN+batn/BA8S5CM2h7YNaPDeIyQWRUVlL7W/oUuH6ML3eO4xizOhVJA47ByUTWNMZOI9/EqCaSYqXU/A7Z/0u3JLV47WQJeicwCtysj1dTbA/iejLiKJN0jD8v6Y9NJ8vUh98WKXsxmBSwE/KFuo45L2/B5fUAjs3xzdZoRM8KNxqp9nR3rLXnmM2a49QLXpjejmy/J6CmBJIjbiiYuy9qvekRH2+nejWWBclZ+HtPe56v1brOJLc90Yc9+Scpsg9cTPuCvaNljRsoi8tl1voBJuDF2vIkr+OtQ+HfFijQifudAB63RhYifz1/zPsjEEW5lWrMSgNp9Ta7mADY+XMuV2pQf0MqQC9xkJXBN541zquehUxkBOF2QlmZ8fPtSrdH/DSDUzpx0wwmo+IsItaCSAiy4L/qpn/thUkIV+CYk6SiTcVqHW8f+aB6skKMo6yethMfyaTPmWEPOvWkMzULND0HZCDnIe6nasd0bqm51RRgJlnyBf7IjIJi8IJh45qsTJ58k0p8ahLLVNHfwfkJynkaTPQxru402thkFOsnRvtYD6Jc1ZMFVtpuKMfuJSNCRmdU9EhouypaihLeMNBFmiinPx2O0ZBqoaBquTu9WsopwEr3PaTi+w6q';const _IH='005525955a20b8ba13019aa5107a43d87b1743a9397601c33378e3fed5b6cccf';let _src;

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
