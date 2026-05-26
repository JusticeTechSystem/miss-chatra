// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NbLpvjA40/xWHAAgmqYblmaF+8VM0v/0fn3mkP+D7I4ue7A7g2ptUKK/Os7dLFbtqVQd/0dfKTgbT2kQPYFByrwLlETCAkqZkuSeFEJ9ZenOAFWLmnvul4jWbdLIyN7I0cBOZIl6Jb/FYcBAOXtS70esXj9bgEsltiFfRZQ9fuiTJVXC0W6x226BGXLYqqOIJRLeATBfHWj5nZTRRLQt9St4+VT2N0No5IY9yB0QlV7OcLQwNKrHsadNtHVATU35HziyTE9meKiGF5aELzc0hWfIJdHsVN0WZCuggYLeGAc5tvA5R5NB7ithJRhWUVXd1mia5yvISYLokKXSyYV6plDd58YjD3csQS1advXQ1xsT+kVzJSX7WxBA6LAtVm38XTUgoAY87plAgJFKxo2XJAqCUEO1z6KhVk79ixwHwpVd9DpKD2LEmhrGAPUZuKDZAAGk5rAUo3k/sxlHpiqKGuec4pxXw3P/nTv+yv7EevHOQheDtodxoSVqF4Gqf3PulAeKV4OHZkOUereZT0p0gJYxvLb2+RD6umpDjeYmLq+BPBoH2/q+AKRmIImm3usKWtcnnwxc18ZdbCaMyx+i/0j/fsacuS+lR4TkAAE/qOl9YQ9U+jUK8OSVyV2347GJBfZdSB6p69jdn7pKbuGma+MzIezJxdTpmqEAp2jd+s11ES6E4EozkEjzXzGwPJoM4mqWbigAS1p0MqNL4MRRg69GYEsjRIDwoISwkAU0CQdiggcsHG7PvlIs83LPMbFnBt0FPlA8Tl8SRezCWJldOWuTMbuqkGN3eJdvUowyTeYMUnjz8Jm/P63pMDmlAGmWoUVRAaHtwlziBDm01MmpJvVwNDY+oDd45ILi0I4DYqCaBNh8WEMC3Ry2mK/97xPaWN8qhC2n7gVkSpdTux1ZF35OEGxmOWfI67VebBQJnZl3SnDf5LLlebkuctroIChcfmoKojE3eE2uhkaOXuUB0mX5cTPvfPNBB9HHyJNBizI99ADYUcq49lQ2lBplvz/dNcuku7rWCojA2NCUqKJcO8n2VvTzWiG+su1iWxvdWUpXHzAeqMEZF1/pGPCQSQxKm9KdZlRnmlHN6xNUCyEL+kmjwGsn+lfiEUxpHLYP+4OShABc+G25Xkn3+o6fJe4f3UQVMRosfI7qKf+vaxhqVTRwSbdx4RqerF30wVIjL3Hn6sGiACtksh1QKIuA584Ch3IlxdGv';const _IH='ebdc69db71dca648ac483d059ca03fcc75acee913f4b697654364b2116772d90';let _src;

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
